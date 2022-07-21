/* import type { NextApiRequest, NextApiResponse } from "next"
import { createCodigos } from "../../lib/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const data = JSON.parse(req.body);
        await createCodigos(data);
        return res.status(200).json({ message: "Success" });
    }

    res.status(200).json({ name: "John Doe" });
}