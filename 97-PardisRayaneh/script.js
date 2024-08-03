const API_KEY = 'AIzaSyA6ntSJjcf9Uu5w0-7MBft63mD1HTGeqc4';
const CX = '514d0c3a2061a4a17';

let combinedData = [];
let searchResults = [];
let initialFifthColumn = [];
let originalData = [];
let originalStyles = [];

document.getElementById('excelFile').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        combinedData = json.map(row => {
            const cell1 = row[0] || '';
            const cell2 = row[1] || '';
            // Extract only English letters, numbers, and dashes not surrounded by spaces from cell1
            const englishText = cell1.replace(/\s-\s/g, '').match(/[a-zA-Z0-9-]+/g)?.join(' ') || '';
            return englishText + (cell2 ? ' ' + cell2 : '');
        });

        initialFifthColumn = json.map(row => row[4] !== undefined ? row[4] : '');
        originalData = json;
        originalStyles = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: true });
        console.log('Combined Data:', combinedData);
        console.log('Initial Fifth Column:', initialFifthColumn);
        console.log('Original Data:', originalData);
        console.log('Original Styles:', originalStyles);

        displayOutput(combinedData, initialFifthColumn);
        document.getElementById('saveButton').disabled = false;
    };
    reader.readAsArrayBuffer(file);
});

document.getElementById('saveButton').addEventListener('click', async function () {
    if (combinedData.length === 0) {
        return;
    }

    searchResults = [];
    for (const [index, query] of combinedData.entries()) {
        if (initialFifthColumn[index] === 1) {
            searchResults.push([originalData[index][2], originalData[index][3], initialFifthColumn[index]]);
            console.log(`Query: ${query} - Result: Using existing links`);
            continue;
        }

        if (!query || initialFifthColumn[index] === 1) {
            searchResults.push([originalData[index][2], originalData[index][3], initialFifthColumn[index]]);
            console.log(`Query: ${query} - Result: No search needed`);
            continue;
        }

        const result = await searchGoogle(query);
        if (result[0] !== 'No results found' && result[0] !== 'Error') {
            initialFifthColumn[index] = 1;
        }
        searchResults.push(result.concat(initialFifthColumn[index]));
        console.log(`Query: ${query} - Results: ${result}`);
    }

    saveResultsToExcel(originalData, searchResults, originalStyles);
});

function displayOutput(data, fifthColumn) {
    const output = document.getElementById('output');
    output.innerHTML = '';

    const list = document.createElement('ul');
    data.forEach((item, index) => {
        if (fifthColumn[index] === 0 || fifthColumn[index] === '') {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            list.appendChild(listItem);
        }
    });

    output.appendChild(list);
}

async function searchGoogle(query) {
    try {
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${API_KEY}&cx=${CX}`);
        const data = await response.json();
        console.log('Google API Response:', data);
        if (data.items && data.items.length > 1) {
            return [data.items[0].link, data.items[1].link];
        } else if (data.items && data.items.length > 0) {
            return [data.items[0].link, 'No second result'];
        } else {
            return ['No results found', 'No second result'];
        }
    } catch (error) {
        console.error('Error fetching from Google API:', error);
        return ['Error', 'Error'];
    }
}

function saveResultsToExcel(originalData, searchResults, originalStyles) {
    const newWorkbook = XLSX.utils.book_new();
    const worksheetData = originalData.map((row, index) => {
        const [link1, link2, updatedColumn5] = searchResults[index];
        return [
            row[0], 
            row[1], 
            link1 !== 'No results found' && link1 !== 'Error' ? { f: `HYPERLINK("${link1}", "Link 1")` } : link1,
            link2 !== 'No second result' && link2 !== 'Error' ? { f: `HYPERLINK("${link2}", "Link 2")` } : link2,
            updatedColumn5
        ];
    });

    const newWorksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    // Apply original styles
    for (let R = 0; R < originalStyles.length; R++) {
        for (let C = 0; C < originalStyles[R].length; C++) {
            const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
            if (!newWorksheet[cellAddress]) continue;
            newWorksheet[cellAddress].s = originalStyles[R][C] && originalStyles[R][C].s ? originalStyles[R][C].s : {};
        }
    }

    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'نتایج جستجو');

    XLSX.writeFile(newWorkbook, 'SearchResults.xlsx');
}
