import React from 'react'

function Content() {
  return (
    <div class="bg-secondary"><main className="container" style={{ marginTop: '70px', maxWidth: '100%'}}>
                {/* <p className="display-6 text-white">Simple blog site</p> */}
                <section className="row d-flex justify-content-center">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="col-md-6 col-sm-12 col-lg-4 d-flex justify-content-center justify-content-md-between my-1">
                            <div className="card">
                                <img className="img-fluid rounded" src="https://picsum.photos/300/200" alt="" />
                                <div className="card-body">
                                    <div>
                                        <p>Count {index + 1}</p>
                                        <p>created by Megala</p>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main></div>
  )
}

export default Content