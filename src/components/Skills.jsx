import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__head">
        <span className="section__num">04</span>
        <h2 className="section__title">Skills</h2>
      </div>

      <div className="skills">
        {skills.map((group) => (
          <div key={group.category} className="skills__group">
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
