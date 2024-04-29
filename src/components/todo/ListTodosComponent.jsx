function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const todos = [
                    {id: 1, description: 'Learn AWS', done: false, targetDate:targetDate},
                    {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate:targetDate},
                    {id: 3, description: 'Learn DevOps', done: false, targetDate:targetDate},
                ];
    
    const alists = [
                    {id: 1, text: 'hi, i am first'},
                    {id: 2, text: 'hi, i am second'},
                    {id: 3, text: 'hi, i am third'}
                ]

    return (
        <div className="container">
            <h1>Things You Want To Do!</h1>
            <div className>
                <table className='table'>
                    <thead>
                            <tr>
                                <td>id</td>
                                <td>description</td>
                                <td>is Done?</td>
                                <td>TargetDate</td>
                            </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ListTodosComponent