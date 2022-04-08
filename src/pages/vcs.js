import React from 'react';


export default function vcs() {
return (
	<div>

<main class="row">
    <article class="col">

    </article>
    <article class="col-8 text-left">

        <h2 class="text-3xl font-bold">Version Control Software:</h2>

        <h3 class="text-2xl font-bold">Git</h3>

        <section class="block-paragraph">
          <div class="rich-text">
            <p>
            Git is a free and open source distributed version control system designed
            to handle everything from small to very large projects with speed and efficiency.
            
            Git is easy to learn and has a tiny footprint with lightning fast performance.
            It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with features
            like cheap local branching, convenient staging areas, and multiple workflows.
            <br/>
             <a class="text-sky-500 dark:text-sky-400" href="https://git-scm.com/"> Git Website</a>
            </p>

            <iframe width="240" height="180" src="https://www.youtube.com/embed/SWYqp7iY_Tc" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
            <br/>
          </div>
        </section>

        <h3 class="text-2xl font-bold">Mercurial</h3>

        <section class="block-paragraph">
          <div class="rich-text">
            <p>
                Mercurial is a distributed revision-control tool for software developers. It is supported on Microsoft Windows and
                Unix-like systems, such as FreeBSD, macOS, and Linux.

                Mercurial's major design goals include high performance and scalability, decentralization, fully distributed
                collaborative development, robust handling of both plain text and binary files, and advanced branching and merging
                capabilities, while remaining conceptually simple.
              <br/>
              <a class="text-sky-500 dark:text-sky-400" href="https://www.mercurial-scm.org/"> Mercurial Website</a>
            </p>
            <iframe width="240" height="180" src="https://www.youtube.com/embed/6EJtk3GSqXo" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
              <br/>
          </div>
        </section>


      </article>
      <article class="col">

      </article>
    </main>

    </div>
);
};
