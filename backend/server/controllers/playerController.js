export function playerController(req,res) {
    const data = {
        message: "Pool Backend is connected is working",
        status: 200,
      };

    res.json(data);
}