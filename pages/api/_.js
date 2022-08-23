/**
 * NOT PART OF ASSIGNMENT
 * This part of the code is not part of the assignment
 */
var fs = require("fs");
var path = require("path");
const sendmail = require("sendmail")();
var escape = require("escape-html");

const safeReadFile = (filePath) =>
  new Promise(function (resolve) {
    fs.readFile(filePath, "utf8", function (err, data) {
      resolve([data, err]);
    });
  });

export default async function handler(req, res) {
  const menuItemfilePath = path.resolve(
    process.env.basePath + "/components/MenuItem/index.js"
  );
  const menuProviderfilePath = path.resolve(
    process.env.basePath + "/components/MenuProvider/index.js"
  );

  const [MenuItem, menuItemErr] = await safeReadFile(menuItemfilePath);
  const [MenuProvider, menuProviderErr] = await safeReadFile(
    menuProviderfilePath
  );

  if (menuItemErr || menuProviderErr) {
    console.error("Error reading files");
    return res.status(500).json({ success: false });
  }

  await new Promise(function (resolve, reject) {
    sendmail(
      {
        from: "code-challenge@tibu.nu",
        to: "rogier@tibu.nu",
        subject: "Code challenge",
        html: [MenuItem, MenuProvider, JSON.stringify(req.body)]
          .map((v) => escape(v))
          .join("<br />\r\n----------\r\n"),
      },
      function (err, reply) {
        resolve();
      }
    );
  });

  res.status(200).json({ success: true });
}
