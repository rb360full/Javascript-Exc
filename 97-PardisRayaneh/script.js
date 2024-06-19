const API_KEY = 'AIzaSyA6ntSJjcf9Uu5w0-7MBft63mD1HTGeqc4';
const CX = '658dacb77c9c045d9';

let combinedData = [];
let searchResults = [];

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

        combinedData = json.map(row => row[0] + ' ' + row[1]);
        console.log('Combined Data:', combinedData);

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
    for (const query of combinedData) {
        const result = await searchGoogle(query);
        searchResults.push(result);
        console.log(`Query: ${query} - Result: ${result}`);
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
        return data.items && data.items.length > 0 ? data.items[0].link : 'No results found';
    } catch (error) {
        console.error('Error fetching from Google API:', error);
        return 'Error';
    }
}

function saveResultsToExcel(column1, column2) {
    const newWorkbook = XLSX.utils.book_new();
    const worksheetData = column1.map((item, index) => {
        const link = column2[index];
        return link !== 'No results found' && link !== 'Error' ? [item, { f: `HYPERLINK("${link}", "Link")` }] : [item, link];
    });
    const newWorksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'نتایج جستجو');

    XLSX.writeFile(newWorkbook, 'SearchResults.xlsx');
}
