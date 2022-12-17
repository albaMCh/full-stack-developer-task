// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import executeQuery from "../../lib/db";

import { IJoke } from "../../shared/models/Joke";

type Data = {
  data?: IJoke[];
  errorMesage?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const result = await executeQuery({
      query: "SELECT * FROM JOKES",
    });

    res.status(200).json({
      data: result,
    } as Data);
  } else {
    res.status(404).json({ errorMesage: "Not found" });
  }
}
