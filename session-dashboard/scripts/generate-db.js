const fs = require("fs");

const students = [
    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "David Wilson",
    "Emma Thomas",
    "Sophia Miller",
];

const sessions = [];

for (let i = 1; i <= 20; i++) {
    const metrics = [];

    for (let j = 0; j < 7; j++) {
        metrics.push({
            time: `09:${String(j * 10).padStart(2, "0")}`,
            engagement: 70 + Math.floor(Math.random() * 31),
            clarity: 65 + Math.floor(Math.random() * 31),
            pacing: 75 + Math.floor(Math.random() * 26),
        });
    }

    sessions.push({
        id: i,
        student: students[i % students.length],
        date: `2026-07-${String((i % 20) + 1).padStart(2, "0")}`,
        metrics,
    });
}

fs.writeFileSync(
    "db.json",
    JSON.stringify({ sessions }, null, 2)
);

console.log("db.json generated.");