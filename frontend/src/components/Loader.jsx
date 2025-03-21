export default function Loader() {
  return (
    <div className=" position-relative">
      <div className="position-fixed top-50 start-50">
        <div className="spinner-border text-primary " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

    </div>
  )
}