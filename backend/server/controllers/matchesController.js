export function matchesController(req,res) {
    const data = {
        message: "Matches Backend is connected is working",
        status: 200,
      };

    res.json(data);
}