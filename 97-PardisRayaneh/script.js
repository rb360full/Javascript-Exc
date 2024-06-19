const API_KEY = 'AIzaSyA6ntSJjcf9Uu5w0-7MBft63mD1HTGeqc4';
const CX = '658dacb77c9c045d9';

let combinedData = [];
let searchResults = [];
let initialFourthColumn = [];
let originalData = [];

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
            return cell1 + (cell2 ? ' ' + cell2 : '');
        });

        initialFourthColumn = json.map(row => row[3] !== undefined ? row[3] : '');
        originalData = json;
        console.log('Combined Data:', combinedData);
        console.log('Initial Fourth Column:', initialFourthColumn);
        console.log('Original Data:', originalData);

        displayOutput(combinedData);
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
        if (initialFourthColumn[index] === 1) {
            searchResults.push([originalData[index][1], originalData[index][2]]);
            console.log(`Query: ${query} - Result: Using existing links`);
            continue;
        }

        if (!query || initialFourthColumn[index] === 1) {
            searchResults.push([originalData[index][1], originalData[index][2]]);
            console.log(`Query: ${query} - Result: No search needed`);
            continue;
        }

        const result = await searchGoogle(query);
        searchResults.push(result);
        console.log(`Query: ${query} - Results: ${result}`);
    }

    saveResultsToExcel(combinedData, searchResults);
});

function displayOutput(data) {
    const output = document.getElementById('output');
    output.innerHTML = JSON.stringify(data, null, 2);
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

function saveResultsToExcel(column1, column2) {
    const newWorkbook = XLSX.utils.book_new();
    const worksheetData = column1.map((item, index) => {
        const [link1, link2] = column2[index];
        const hasLink = (link1 !== 'No results found' && link1 !== 'Error' && link1 !== 'Empty query') || 
                        (link2 !== 'No second result' && link2 !== 'Error' && link2 !== 'Empty query');
        return [
            item, 
            link1 !== 'No results found' && link1 !== 'Error' && link1 !== 'Empty query' ? { f: `HYPERLINK("${link1}", "Link 1")` } : link1,
            link2 !== 'No second result' && link2 !== 'Error' && link2 !== 'Empty query' ? { f: `HYPERLINK("${link2}", "Link 2")` } : link2,
            hasLink ? 1 : 0
        ];
    });
    const newWorksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'نتایج جستجو');

    XLSX.writeFile(newWorkbook, 'SearchResults.xlsx');
}
