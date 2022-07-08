type PropsCard = {
    badge: string,
    Status:string
}
export const Card = (props: PropsCard) => {
    return (
    <div className="col">
      <div className="card" >
        <div className="card-body">
          <h4><span className={props.badge}>{props.Status}</span></h4>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

        </div>
      </div>
    </div>
    )

}