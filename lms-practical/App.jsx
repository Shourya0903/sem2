import "./App.css";

const students = [
  {
    id: 1,
    name: "Rahul Sharma",
    course: "BTech CSE",
    year: "2nd Year",
    cgpa: "8.5",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Singh",
    course: "BCA",
    year: "2nd Year",
    cgpa: "9.1",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <h2>Dashboard</h2>

        <div className="nav-icons">
          <span>🏠</span>
          <span>👤</span>
          <span>⚙️</span>
        </div>
      </nav>

      <h1 className="title">Student Profile Dashboard</h1>

      <div className="card-container">
        {students.map((student) => (
          <div className="card" key={student.id}>
            <img src={student.image} alt={student.name} />

            <div className="details">
              <p>
                <span>Name:</span> {student.name}
              </p>

              <p>
                <span>Course:</span> {student.course}
              </p>

              <p>
                <span>Year:</span> {student.year}
              </p>

              <p>
                <span>CGPA:</span> {student.cgpa}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;