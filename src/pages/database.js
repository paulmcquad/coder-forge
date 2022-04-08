import React from 'react';


export default function database() {
return (
	<div>
<main class="row">
    <article class="col">

    </article>
    <article class="col-8  text-left">

        <h2 class="text-3xl font-bold">Databases: SQL</h2>
        <h3 class="text-2xl font-bold">MariaDB</h3>

    <section class="block-paragraph">
        <div class="rich-text">
            <p>
                MariaDB is a community-developed, commercially supported fork of the MySQL relational database management system,
                intended to remain free and open-source software under the GNU General Public License.
            </p>
            <br/>
            <p>
                MariaDB intended to maintain high compatibility with MySQL, ensuring a drop-in replacement capability with library
                binary parity and exact matching with MySQL APIs and commands. However, new features diverge more. It includes new
                storage engines like Aria, ColumnStore, and MyRocks.
            </p>
            <br/>
            |
            <a class="text-sky-500 dark:text-sky-400" href="https://mariadb.org/"> MariaDB </a>
            |
        </div>
        <br/>
        <hr></hr>
    </section>

    <h3 class="text-2xl font-bold">PostgreSQL</h3>

    <section class="block-paragraph">
        <div class="rich-text">
            <p>
                PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing
                extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the
                Ingres database developed at the University of California, Berkeley
            </p>
            <br/>
            <p>
                PostgreSQL features transactions with Atomicity, Consistency, Isolation, Durability (ACID) properties, automatically
                updatable views, materialized views, triggers, foreign keys, and stored procedures.
            </p>
            <br/>
            |
            <a class="text-sky-500 dark:text-sky-400" href="https://www.postgresql.org/"> PostgreSQL </a>
            |
        </div>
        <br/>
        <hr></hr>
    </section>

        <h2 class="text-3xl font-bold">Databases: NoSQL</h2>
        <h3 class="text-2xl font-bold">MongoDB</h3>
        
        <section class="block-paragraph">
            <div class="rich-text">
                <p>
                    MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program,
                    MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the
                    Server Side Public License (SSPL).
                </p>
                <br/>
                |
                <a class="text-sky-500 dark:text-sky-400" href="https://www.mongodb.com/"> MongoDB </a>
                |
            </div>
            <br/>
            <hr></hr>
        </section>

        <h3 class="text-2xl font-bold">Apache CouchDB</h3>
        
        <section class="block-paragraph">
            <div class="rich-text">
                <p>
                    Apache CouchDB is an open-source document-oriented NoSQL database, implemented in Erlang.

                    CouchDB uses multiple formats and protocols to store, transfer, and process its data, it uses JSON to store data,
                    JavaScript as its query language using MapReduce, and HTTP for an API.

                    CouchDB was first released in 2005 and later became an Apache Software Foundation project in 2008.
                </p>
                <br/>
                |
                <a class="text-sky-500 dark:text-sky-400" href="https://couchdb.apache.org/"> Apache CouchDB </a>
                |
            </div>
            <br/>
            <hr></hr>
        </section>

    </article>
    <article class="col">

    </article>
</main>

    </div>
);
};
