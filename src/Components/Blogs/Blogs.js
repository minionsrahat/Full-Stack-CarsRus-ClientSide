import React from 'react';

const Blogs = () => {
    return (
        <>
            <div class="container my-5">
                <div class="row my-5 gy-5">
                    <div class="col-md-10 mx-auto">
                        <h3>1.When should you use nodejs and when should you use mongodb</h3>
                        <p>Any project necessitates the use of a programming environment and a runtime library that provide you with basic programming tools and support, as well as the ability to compile and/or read your source code. Nodejs is an example of a programming tool for the Javascript programming language. As a result, if you wish to develop some sort of stand-alone software or server in Javascript, you can do it with the help of nodejs.</p>
                        <p>
                            If your application requires the capacity to persistently store data in a way that allows you to efficiently query or update it later, you will most likely need to use some form of database. There are many of well-known databases to choose from. MongoDB is an example of such a database. Other databases include MariaDB, MySql, CouchDB, DynamoDB (on AWS), and Postgres, to name just a few. Distinct databases have different strengths (things they are greatest at) and other ways of being used, making it a completely different question to choose which database is the right/best for what you're doing in the first place.
                        </p>
                    </div>
                    <div class="col-md-10 mx-auto">
                        <h3>2.Differences between sql and nosql databases.</h3>
                        <h5>SQL</h5>
                        <p>SQL databases are a type of system software that allows for the management, analysis, capture, and querying of structured data in a relational manner. SQL databases are also known as relational databases. A programming language that is used to interface with databases for the purposes of storing, deleting, updating, inserting, and retrieving data. Structured Query Languages (SQL) are supported by SQL databases.</p>

                        <h5>NOSQL</h5>
                        <p>
                            NoSQL databases are a type of software that enables for the storage and retrieval of structured, unstructured, and polymorphic data for a variety of applications using different types of data. A database management system that retrieves, stores, and manages the scalability of databases. In the absence of a declarative query language, NonSQL is the only option.                   </p>
                    </div>

                    <div class="col-md-10 mx-auto">
                        <h3>3. What is the purpose of jwt and how does it work?</h3>
                        <p>JWT, or JSON Web Token, is an open standard that is used to securely communicate information between two parties — a client and a server — over the internet. Typically, it is a JSON file that has been encoded and contains claims as well as a signature. It's typically used in conjunction with other authentication systems such as OAuth and OpenID to communicate information about the user's identity.</p>
                        <p>
                            When the Service Provider and the Identity Provider exchange secret keys, the Service Provider can hash a portion of a token that it receives and compare it to the token's signature by using the secret key. Once again, if the result matches the signature, it is known to the SP that the information presented has originated from the other entity that possesses the key. With the use of the public key, the Identity Provider produces a JWT verifying a user's identity, which the resource server decodes and confirms the authenticity of.
                            Because the tokens will be used for permission and authentication in future requests and API calls, it is critical that they are protected from security vulnerabilities. These tokens should not be saved in regions that are accessible to the general public, such as the browser's local storage or cookies. Unless there are no other options available, the payload should be protected via encryption. 
                         </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Blogs;