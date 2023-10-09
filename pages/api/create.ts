import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, surname, classnum, phoneNumber, selectedLang} = req.body; // Fix variable names here

  try {
    await prisma.members.create({
      data: {
        name,
        surname, 
        classnum, 
        phoneNumber,
        selectedLang
      },
    });
    res.status(200).json({ message: 'Account Created' });
  } catch (error) {
    console.log(error);
  }
}
