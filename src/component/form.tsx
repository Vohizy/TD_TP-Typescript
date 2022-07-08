export const Form = () => {
    return (
        
  <form>
    <div className="form-group w-25 p-3">
      <label >title</label>
      <input type="text" className="form-control text-break" id="formGroupExampleInput" placeholder="TITLE"></input>
    </div>
    <div className="form-group w-50 p-3">
      <label >content</label><br></br>
     <textarea className='Text'>

      </textarea>
    </div>
    <div className="form-group w-50 p-3">
      <select className="custom-select" id="validationCustom04" required>
        <option><span className="badge badge-primary">To Do</span></option>
        <option><span className="badge badge-secondary">Progresse</span></option>
        <option><span className="badge badge-success">Done</span></option>
      </select>
      <button type="button" className="btn btn-info">subbemet</button>
    </div>
        
  </form>
    )
}