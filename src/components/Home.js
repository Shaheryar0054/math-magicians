export default function Home() {
  const text = 'Welcome to Math Magicians, your one-stop destination for all things math!\n\n'
      + 'Whether you\'re a student, a teacher, or just someone who loves math, '
      + 'we\'ve got everything you need to enhance your math skills and knowledge. '
      + 'From basic arithmetic to advanced calculus, we\'ve got it all covered. '
      + 'So why wait? Start exploring our site today and take your math skills to '
      + 'the next level!';
  return (
    <div className="Home-content">
      <h1>Math Magicians</h1>
      <h2>Welcome to our page!</h2>
      <p>{text}</p>
    </div>
  );
}
