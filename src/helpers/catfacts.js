import fetch from "node-fetch";

const functions = {
  getListFromAPI: async function () {
    const path = "/facts";

    const res = await fetch(`${process.env.SOURCE_API}${path}`, {
      compress: true,
      timeout: 60e3, // 60s timeout as default
      follow: 0,
      headers: {
        "content-type": "application/json",
      },
    }).catch((err) => {
      console.log("Some error!");
      throw err;
    });

    return await res.json();
  },
};

export default functions;
