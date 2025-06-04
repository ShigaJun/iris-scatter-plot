export default function Dropdown({ setXAxis, setYAxis }) {
    return (
        <div className="columns">
            <div className="column">
                <div className="field">
                    <label className="label">x property</label>
                    <div className="control">
                        <div className="select">
                            <select defaultValue="sepalLength" onChange={(e) => setXAxis(e.target.value)}>
                                <option>sepal length</option>
                                <option>sepal width</option>
                                <option>petal length</option>
                                <option>petal width</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="field">
                    <label className="label">y property</label>
                    <div className="control">
                        <div className="select">
                            <select defaultValue="sepalLength" onChange={(e) => setYAxis(e.target.value)}>
                                <option>sepal length</option>
                                <option>sepal width</option>
                                <option>petal length</option>
                                <option>petal width</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}