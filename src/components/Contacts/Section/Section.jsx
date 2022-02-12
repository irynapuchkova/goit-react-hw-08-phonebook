import { Title } from "./Section.styled";

export default function Section({ title, children }) {
  return (
    <section>
      {title && <Title>{title}</Title>}
      {children}
    </section>
  );
}
