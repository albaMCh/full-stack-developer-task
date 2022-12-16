// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import executeQuery from "../../lib/db";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const result = await executeQuery({
      query: "SELECT * FROM JOKES",
    });

    res.status(200).json(result as Data);
  } else {
    res.status(404).json({ name: "Not found" });
  }
}
