export default function Main({ children }) {
  console.log(children);
  return (
    <main className='px-8 py-20 transition-all duration-300 md:ml-52 max-w-7xl'>
      {children}
    </main>
  );
}
