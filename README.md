# Use tei-html-renderer

- `pnpm i tei-html-renderer`
```JSX
import { TEIHTMLRenderer } from 'tei-html-renderer'

function App() {

  return (
        <TEIHTMLRenderer TEIDocumentURL='<a_tei_file_referenced_on_web>' setNote={(e: any) => console.log(e)} />
  )
}

export default App
```
# Edit tei-html-renderer

- `git clone https://github.com/sherlock-iremus/tei-html-renderer.git`
- `pnpm i`
- Do your modifications
- pnpm link --global
- (in your test project) `pnpm link --global tei-html-renderer`
