const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/', (req, res) => {
      const inputStr = req.body.inputStr;

      if (!inputStr) {
            return res.status(400).json({ error: 'Input string is missing from the request body.' });
      }
      console.log(inputStr);
      const searchStr = "girijesh";

      function countOccurrences(inputStr, searchStr) {
            const regex = new RegExp(searchStr, 'g');
            const matches = inputStr.match(regex);
            if (matches) {
                  return matches.length;
            } else {
                  return 0;
            }
      }
      const occurrenceCount = countOccurrences(inputStr, searchStr);
      console.log(`The string "${searchStr}" appears ${occurrenceCount} times.`)
});
const PORT = 3000;
app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
});