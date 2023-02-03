// @ts-ignore
export function Logo({logo}) {
    return (<div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo"/>
        </a>
        <a href="https://reactjs.org" target="_blank">
            <img src={logo} className="logo react" alt="React logo"/>
        </a>
    </div>)
}