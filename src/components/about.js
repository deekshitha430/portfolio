import React from "react";

const about = () => {
    return (
        <>
        <div className="about-section">
           <h1>About Me!</h1>
           <p>I'm currently pursuing graduation in Hyderabad.</p>
        </div>

            
        <div className="row">
           <div className="column col-lg-4">
              <div className="card">
                    <img src="https://geekboots.sfo2.cdn.digitaloceanspaces.com/post/why-c-is-so-popular-and-still-the-best-programming-language-1564571756694.jpg" alt="C-language" />
                    <div className="container">
                       <h2>C Programming</h2>
                       <p className="title">Basics</p>
                       <p>C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners.</p>
                    </div>
                </div>
             </div>

  <div className="column col-lg-4">
    <div className="card">
      <img src="https://www.oracle.com/a/ocom/img/cb71-java-logo.png" alt="Java" />
      <div className="container">
        <h2>Java</h2>
        <p className="title">Core Java</p>
        <p >Java SE downloads including: Java Development Kit (JDK), Server Java Runtime Environment (Server JRE), and Java Runtime Environment (JRE).</p>
      </div>
    </div>
  </div>

  <div className="column col-lg-4">
    <div className="card">
      <img src="data:image/jpeg;base64,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" alt="Web"/>
     <div className="container">
        <h2>Web Development</h2>
        <p className="title">Designer</p>
        <p>Web developers design and create websites. They are responsible for the look of the site. They are also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed.</p>
      </div>
    </div>
  </div>
</div>
</>
    )
}

export default about;
