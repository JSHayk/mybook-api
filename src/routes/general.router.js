import express from "express";

const router = express();
router.get("*", notFound);
router.post("*", notFound);
router.put("*", notFound);
router.delete("*", notFound);

function notFound(req, res) {
  res.statu(404).send("Not found");
}

export default router;
