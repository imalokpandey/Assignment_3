//
const fs = require('fs').promises;
const axios = require('axios');

async function downloadAndSave(url, filename) {
  try {
    const response = await axios.get(url);
    await fs.writeFile(filename, response.data);
    return 'File saved successfully';
  } catch (error) {
    throw error;
  }
}

(async () => {
  try {
    const message = await downloadAndSave('https://example.com', 'example.html');
    console.log(message);
  } catch (err) {
    console.error('Error:', err);
  }
})();
