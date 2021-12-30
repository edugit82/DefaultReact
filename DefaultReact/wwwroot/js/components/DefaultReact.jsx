export class DefaultReact extends React.Component
{
    constructor()
    {
        super()
    }

    render()
    {
        return(<div id="DefaultReact" ></div>)
    }
}

let Executa = function ()
{
    ReactDOM.render(<DefaultReact />, document.getElementById("corpo"))
}

export { Executa }