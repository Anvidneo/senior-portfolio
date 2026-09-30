import type { Content } from "@/lib/content";

export default function Stack({ stack }: { stack: Content["stack"] }) {
  return (
    <section className="sec alt gut" id="stack">
      <div className="in chap">
        <div className="sec-head">
          <h2>{stack.title}</h2>
        </div>
        <div className="pow">
          {stack.groups.map((group) => (
            <div className="card" key={group.name}>
              <h3>{group.name}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
