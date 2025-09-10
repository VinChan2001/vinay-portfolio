export default function Footer() {
  return (
    <footer className="border-t py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      <div className="container">
        © {new Date().getFullYear()} Vinay Chanamallu. All rights reserved.
      </div>
    </footer>
  )
}
