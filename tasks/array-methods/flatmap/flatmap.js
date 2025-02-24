// Ты разрабатываешь систему управления проектами, где у каждой команды есть список задач (tasks).
// Каждая задача содержит список участников (assignees), которые за нее отвечают.
// Тебе нужно получить список всех участников, занятых хотя бы в одной задаче, без дубликатов.
// Ожидаемый результат: ["Alice", "Bob", "Charlie", "David"]

const projects = [
    {
        name: "Project A",
        tasks: [
            {title: "Design UI", assignees: ["Alice", "Bob"]},
            {title: "Implement API", assignees: ["Charlie", "Alice"]}
        ]
    },
    {
        name: "Project B",
        tasks: [
            {title: "Write Documentation", assignees: ["Alice", "David"]},
            {title: "Testing", assignees: ["Bob", "Charlie"]}
        ]
    }
];

const employees = Array.from(new Set(projects.flatMap(project => project.tasks.flatMap(task => task.assignees))));
console.log(employees); // [ 'Alice', 'Bob', 'Charlie', 'David' ]
