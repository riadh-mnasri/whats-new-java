// Catalogue des versions de Java, de la version 8 (2014) a la derniere version stable connue.
// Contenu bilingue FR/EN pour chaque champ visible par l'utilisateur.

export interface LocalizedText {
  fr: string;
  en: string;
}

export interface Highlight {
  title: LocalizedText;
  description: LocalizedText;
  code?: string;
}

export interface JavaVersion {
  version: number;
  releaseDate: string;
  isLts: boolean;
  headline: LocalizedText;
  highlights: Highlight[];
}

export const javaVersions: JavaVersion[] = [
  {
    version: 8,
    releaseDate: "2014-03-18",
    isLts: true,
    headline: {
      fr: "La revolution fonctionnelle : lambdas, streams et une nouvelle API de date/heure.",
      en: "The functional revolution: lambdas, streams and a brand new date/time API.",
    },
    highlights: [
      {
        title: { fr: "Expressions lambda", en: "Lambda expressions" },
        description: {
          fr: "Java gagne une syntaxe concise pour representer des fonctions comme des valeurs, ouvrant la voie a un style de code beaucoup plus expressif.",
          en: "Java gains a concise syntax for treating functions as values, opening the door to a much more expressive coding style.",
        },
        code: `List<String> names = List.of("Ada", "Grace", "Linus");\nnames.forEach(name -> System.out.println(name));`,
      },
      {
        title: { fr: "API Stream", en: "Stream API" },
        description: {
          fr: "Traitement declaratif des collections : filtrer, transformer et agreger des donnees sans boucles explicites.",
          en: "Declarative processing of collections: filter, map and aggregate data without writing explicit loops.",
        },
        code: `long count = names.stream()\n    .filter(n -> n.length() > 3)\n    .count();`,
      },
      {
        title: { fr: "Optional<T>", en: "Optional<T>" },
        description: {
          fr: "Un conteneur explicite pour representer l'absence de valeur, pense pour reduire les NullPointerException.",
          en: "An explicit container for representing the absence of a value, designed to reduce NullPointerExceptions.",
        },
        code: `Optional<String> maybeName = Optional.ofNullable(getName());\nString result = maybeName.orElse("unknown");`,
      },
      {
        title: { fr: "Methodes par defaut dans les interfaces", en: "Default interface methods" },
        description: {
          fr: "Les interfaces peuvent fournir une implementation par defaut, permettant de les faire evoluer sans casser le code existant.",
          en: "Interfaces can now provide a default implementation, letting them evolve without breaking existing implementers.",
        },
        code: `interface Greeter {\n    default String greet() {\n        return "Hello";\n    }\n}`,
      },
      {
        title: { fr: "java.time (JSR-310)", en: "java.time (JSR-310)" },
        description: {
          fr: "Une nouvelle API de date et heure, immuable et thread-safe, qui remplace enfin l'infame duo Date/Calendar.",
          en: "A new immutable, thread-safe date and time API that finally replaces the infamous Date/Calendar duo.",
        },
        code: `LocalDate today = LocalDate.now();\nLocalDate nextWeek = today.plusDays(7);`,
      },
    ],
  },
  {
    version: 9,
    releaseDate: "2017-09-21",
    isLts: false,
    headline: {
      fr: "Le systeme de modules JPMS et l'arrivee de JShell, le REPL de Java.",
      en: "The JPMS module system arrives, along with JShell, Java's own REPL.",
    },
    highlights: [
      {
        title: { fr: "JPMS (Project Jigsaw)", en: "JPMS (Project Jigsaw)" },
        description: {
          fr: "Le JDK devient modulaire : chaque module declare explicitement ce qu'il expose et ce dont il a besoin, via module-info.java.",
          en: "The JDK becomes modular: each module explicitly declares what it exposes and what it requires, via module-info.java.",
        },
        code: `module com.example.app {\n    requires java.sql;\n    exports com.example.api;\n}`,
      },
      {
        title: { fr: "JShell", en: "JShell" },
        description: {
          fr: "Un REPL officiel pour tester des bouts de code Java instantanement, sans creer de projet ni compiler.",
          en: "An official REPL for trying out Java snippets instantly, with no project setup and no compilation step.",
        },
      },
      {
        title: { fr: "Methodes privees dans les interfaces", en: "Private interface methods" },
        description: {
          fr: "Les interfaces peuvent factoriser du code interne dans des methodes privees, partagees entre plusieurs methodes par defaut.",
          en: "Interfaces can factor internal logic into private methods, shared between several default methods.",
        },
        code: `interface Greeter {\n    private String prefix() {\n        return "Hello, ";\n    }\n\n    default String greet(String name) {\n        return prefix() + name;\n    }\n}`,
      },
      {
        title: { fr: "try-with-resources ameliore", en: "Improved try-with-resources" },
        description: {
          fr: "Une variable effectivement finale peut etre utilisee directement dans un try-with-resources, sans redeclaration.",
          en: "An effectively-final variable can now be used directly in a try-with-resources statement, without redeclaring it.",
        },
        code: `BufferedReader reader = new BufferedReader(new FileReader("f.txt"));\ntry (reader) {\n    System.out.println(reader.readLine());\n}`,
      },
      {
        title: { fr: "Methodes fabriques de collections", en: "Collection factory methods" },
        description: {
          fr: "List.of, Set.of et Map.of permettent de creer des collections immuables en une ligne.",
          en: "List.of, Set.of and Map.of make it possible to create immutable collections in a single line.",
        },
        code: `List<Integer> primes = List.of(2, 3, 5, 7);`,
      },
    ],
  },
  {
    version: 10,
    releaseDate: "2018-03-20",
    isLts: false,
    headline: {
      fr: "L'inference de type locale arrive avec le mot-cle var.",
      en: "Local-variable type inference arrives with the var keyword.",
    },
    highlights: [
      {
        title: { fr: "Inference de type locale (var)", en: "Local-variable type inference (var)" },
        description: {
          fr: "Le compilateur infere le type d'une variable locale a partir de son initialiseur : moins de bruit visuel, meme typage statique fort.",
          en: "The compiler infers a local variable's type from its initializer: less visual noise, the same strong static typing underneath.",
        },
        code: `var list = new ArrayList<String>();\nvar total = 0;`,
      },
      {
        title: { fr: "Copies de collections immuables", en: "Unmodifiable collection copies" },
        description: {
          fr: "List.copyOf, Set.copyOf et Map.copyOf produisent une copie immuable d'une collection existante.",
          en: "List.copyOf, Set.copyOf and Map.copyOf produce an immutable copy of an existing collection.",
        },
        code: `List<String> snapshot = List.copyOf(mutableList);`,
      },
      {
        title: { fr: "Optional.orElseThrow() sans argument", en: "No-arg Optional.orElseThrow()" },
        description: {
          fr: "Une surcharge sans argument leve une NoSuchElementException, en complement de la version avec fournisseur d'exception.",
          en: "A no-argument overload throws a NoSuchElementException, complementing the version that takes an exception supplier.",
        },
        code: `String value = maybeName.orElseThrow();`,
      },
      {
        title: { fr: "Partage de donnees de classes applicatif", en: "Application class-data sharing" },
        description: {
          fr: "Le mecanisme de partage de metadonnees de classes (CDS) s'etend aux classes applicatives, pour un demarrage plus rapide de la JVM.",
          en: "Class-data sharing (CDS) extends to application classes, helping the JVM start up faster.",
        },
      },
    ],
  },
  {
    version: 11,
    releaseDate: "2018-09-25",
    isLts: true,
    headline: {
      fr: "Un client HTTP standard, le lancement de fichiers source uniques et de nouvelles methodes sur String.",
      en: "A standard HTTP client, single-file source launching, and new String methods.",
    },
    highlights: [
      {
        title: { fr: "Client HTTP standardise", en: "Standardized HTTP Client" },
        description: {
          fr: "java.net.http.HttpClient, en incubation depuis Java 9, devient une API standard : support de HTTP/2 et du mode asynchrone.",
          en: "java.net.http.HttpClient, incubating since Java 9, becomes a standard API, with HTTP/2 and asynchronous support.",
        },
        code: `HttpClient client = HttpClient.newHttpClient();\nHttpRequest request = HttpRequest.newBuilder(URI.create("https://example.com")).build();\nHttpResponse<String> response =\n    client.send(request, HttpResponse.BodyHandlers.ofString());`,
      },
      {
        title: { fr: "Lancer un fichier source directement", en: "Launch single-file source code" },
        description: {
          fr: "java Foo.java compile et execute un programme a fichier unique sans etape de compilation separee, ideal pour les scripts et les demos.",
          en: "java Foo.java compiles and runs a single-file program with no separate compilation step, ideal for scripts and quick demos.",
        },
        code: `java Foo.java`,
      },
      {
        title: { fr: "var dans les parametres de lambda", en: "var in lambda parameters" },
        description: {
          fr: "Les parametres de lambda peuvent utiliser var, utile notamment pour y attacher des annotations.",
          en: "Lambda parameters can use var, useful in particular for attaching annotations to them.",
        },
        code: `BinaryOperator<Integer> sum = (var x, var y) -> x + y;`,
      },
      {
        title: { fr: "Nouvelles methodes sur String", en: "New String methods" },
        description: {
          fr: "isBlank, strip, stripLeading, stripTrailing, lines et repeat simplifient des manipulations de chaines tres courantes.",
          en: "isBlank, strip, stripLeading, stripTrailing, lines and repeat simplify very common string manipulations.",
        },
        code: `" hello ".strip();      // "hello"\n"ab".repeat(3);         // "ababab"\n"a\\nb".lines().count(); // 2`,
      },
      {
        title: { fr: "Nettoyage : Java EE et CORBA retires", en: "Cleanup: Java EE and CORBA removed" },
        description: {
          fr: "Les modules Java EE et CORBA, deja depreciees en Java 9, sont retirees du JDK par defaut.",
          en: "The Java EE and CORBA modules, already deprecated in Java 9, are removed from the default JDK.",
        },
      },
    ],
  },
  {
    version: 12,
    releaseDate: "2019-03-19",
    isLts: false,
    headline: {
      fr: "Les expressions switch font leur apparition en preview.",
      en: "Switch expressions make their first appearance as a preview feature.",
    },
    highlights: [
      {
        title: { fr: "Expressions switch (preview)", en: "Switch expressions (preview)" },
        description: {
          fr: "Le switch peut desormais produire une valeur, avec une syntaxe fleche plus concise et sans fall-through implicite.",
          en: "Switch can now produce a value, with a more concise arrow syntax and no implicit fall-through.",
        },
        code: `int numLetters = switch (day) {\n    case MONDAY, FRIDAY, SUNDAY -> 6;\n    case TUESDAY -> 7;\n    default -> 8;\n};`,
      },
      {
        title: { fr: "Shenandoah GC (experimental)", en: "Shenandoah GC (experimental)" },
        description: {
          fr: "Un nouveau ramasse-miettes concu pour des pauses tres courtes, independantes de la taille du tas.",
          en: "A new garbage collector designed for very short pause times, independent of heap size.",
        },
      },
      {
        title: { fr: "Formatage compact des nombres", en: "Compact number formatting" },
        description: {
          fr: "NumberFormat.getCompactNumberInstance affiche des grands nombres sous forme courte et localisee, comme 1,2 k au lieu de 1200.",
          en: "NumberFormat.getCompactNumberInstance renders large numbers in a short, locale-aware form, like 1.2K instead of 1200.",
        },
        code: `NumberFormat fmt = NumberFormat.getCompactNumberInstance(Locale.FRANCE, Style.SHORT);\nfmt.format(1200); // "1,2 k"`,
      },
    ],
  },
  {
    version: 13,
    releaseDate: "2019-09-17",
    isLts: false,
    headline: {
      fr: "Les text blocks font leur entree en preview, le switch se peaufine avec yield.",
      en: "Text blocks arrive as a preview feature, and switch gains the yield keyword.",
    },
    highlights: [
      {
        title: { fr: "Text blocks (preview)", en: "Text blocks (preview)" },
        description: {
          fr: "Des chaines de caracteres multi-lignes lisibles, ideales pour du JSON, du HTML ou du SQL incorpore dans le code.",
          en: "Readable multi-line string literals, ideal for embedding JSON, HTML or SQL directly in code.",
        },
        code: `String json = """\n    {\n      "name": "Java"\n    }\n    """;`,
      },
      {
        title: { fr: "yield dans les expressions switch", en: "yield in switch expressions" },
        description: {
          fr: "Le mot-cle yield remplace break pour renvoyer une valeur depuis un bloc switch, levant l'ambiguite avec les boucles.",
          en: "The yield keyword replaces break to return a value from a switch block, removing the ambiguity with loop statements.",
        },
        code: `int result = switch (mode) {\n    case A -> 1;\n    default -> {\n        yield 0;\n    }\n};`,
      },
      {
        title: { fr: "Archives dynamiques de classes (AppCDS)", en: "Dynamic class-data archiving" },
        description: {
          fr: "Les archives de partage de donnees de classes peuvent etre creees automatiquement a la fin de l'execution d'une application.",
          en: "Class-data sharing archives can now be created automatically at the end of an application run.",
        },
      },
      {
        title: { fr: "ZGC libere la memoire inutilisee", en: "ZGC uncommits unused memory" },
        description: {
          fr: "Le ramasse-miettes ZGC peut desormais rendre au systeme d'exploitation la memoire de tas qu'il n'utilise plus.",
          en: "The ZGC collector can now return unused heap memory back to the operating system.",
        },
      },
    ],
  },
  {
    version: 14,
    releaseDate: "2020-03-17",
    isLts: false,
    headline: {
      fr: "Les expressions switch se standardisent, les records et le pattern matching arrivent en preview.",
      en: "Switch expressions become standard, and records and pattern matching arrive as previews.",
    },
    highlights: [
      {
        title: { fr: "Expressions switch standardisees", en: "Switch expressions standardized" },
        description: {
          fr: "Apres deux rounds de preview, les expressions switch a fleche deviennent une fonctionnalite stable du langage.",
          en: "After two rounds of preview, arrow-style switch expressions become a stable language feature.",
        },
      },
      {
        title: { fr: "Records (preview)", en: "Records (preview)" },
        description: {
          fr: "Une syntaxe compacte pour declarer des porteurs de donnees immuables, avec constructeur, accesseurs, equals/hashCode/toString generes.",
          en: "A compact syntax for declaring immutable data carriers, with generated constructor, accessors, equals/hashCode/toString.",
        },
        code: `record Point(int x, int y) {}`,
      },
      {
        title: { fr: "NullPointerException plus utiles", en: "Helpful NullPointerExceptions" },
        description: {
          fr: "Le message d'erreur precise desormais exactement quelle variable ou quel appel etait null, un vrai gain de temps en debogage.",
          en: "The error message now states precisely which variable or call was null, a real time-saver during debugging.",
        },
      },
      {
        title: { fr: "Pattern matching pour instanceof (preview)", en: "Pattern matching for instanceof (preview)" },
        description: {
          fr: "instanceof peut lier directement une variable typee, evitant le transtypage manuel qui suivait traditionnellement le test.",
          en: "instanceof can directly bind a typed variable, avoiding the manual cast that traditionally followed the check.",
        },
        code: `if (obj instanceof String s) {\n    System.out.println(s.length());\n}`,
      },
      {
        title: { fr: "Outil d'empaquetage jpackage (incubator)", en: "jpackage packaging tool (incubator)" },
        description: {
          fr: "Un outil pour produire des installeurs natifs (msi, dmg, deb...) a partir d'une application Java.",
          en: "A tool to produce native installers (msi, dmg, deb...) from a Java application.",
        },
      },
    ],
  },
  {
    version: 15,
    releaseDate: "2020-09-15",
    isLts: false,
    headline: {
      fr: "Les text blocks se standardisent, les classes scellees arrivent en preview.",
      en: "Text blocks become standard, and sealed classes arrive as a preview feature.",
    },
    highlights: [
      {
        title: { fr: "Text blocks standardises", en: "Text blocks standardized" },
        description: {
          fr: "Les blocs de texte multi-lignes quittent le statut de preview et deviennent une fonctionnalite stable du langage.",
          en: "Multi-line text blocks leave preview status and become a stable language feature.",
        },
      },
      {
        title: { fr: "Classes scellees (preview)", en: "Sealed classes (preview)" },
        description: {
          fr: "Une classe ou interface scellee restreint explicitement la liste des classes autorisees a en heriter, entre heritage ouvert et final.",
          en: "A sealed class or interface explicitly restricts which classes may extend or implement it, a middle ground between open inheritance and final.",
        },
        code: `sealed interface Shape permits Circle, Square {}`,
      },
      {
        title: { fr: "Classes cachees", en: "Hidden classes" },
        description: {
          fr: "Des classes non decouvrables par liaison classique, destinees aux frameworks qui generent du bytecode dynamiquement.",
          en: "Classes that are not discoverable through normal linkage, intended for frameworks that generate bytecode dynamically.",
        },
      },
      {
        title: { fr: "ZGC et Shenandoah se rapprochent de la production", en: "ZGC and Shenandoah move toward production" },
        description: {
          fr: "Les deux ramasse-miettes a faible latence continuent leur maturation vers un usage en production generalise.",
          en: "Both low-latency garbage collectors keep maturing toward broad production readiness.",
        },
      },
    ],
  },
  {
    version: 16,
    releaseDate: "2021-03-16",
    isLts: false,
    headline: {
      fr: "Les records et le pattern matching pour instanceof se standardisent.",
      en: "Records and pattern matching for instanceof become standard.",
    },
    highlights: [
      {
        title: { fr: "Records standardises", en: "Records standardized" },
        description: {
          fr: "Les records quittent la preview, avec la possibilite d'ajouter un constructeur compact pour valider les composants.",
          en: "Records leave preview status, with support for a compact constructor to validate their components.",
        },
        code: `record Point(int x, int y) {\n    Point {\n        if (x < 0) throw new IllegalArgumentException("x must be >= 0");\n    }\n}`,
      },
      {
        title: { fr: "Pattern matching pour instanceof standardise", en: "Pattern matching for instanceof standardized" },
        description: {
          fr: "La liaison de variable directement dans instanceof devient une fonctionnalite stable du langage.",
          en: "Directly binding a variable inside instanceof becomes a stable language feature.",
        },
      },
      {
        title: { fr: "API Vector (incubator)", en: "Vector API (incubator)" },
        description: {
          fr: "Une API pour exprimer des calculs vectoriels qui se compilent en instructions SIMD optimales sur les architectures qui les supportent.",
          en: "An API for expressing vector computations that compile down to optimal SIMD instructions on supporting hardware.",
        },
      },
      {
        title: { fr: "Encapsulation forte du JDK par defaut", en: "Strong encapsulation of JDK internals by default" },
        description: {
          fr: "Les APIs internes du JDK deviennent inaccessibles par defaut sans flag explicite, preparation a leur retrait definitif.",
          en: "Internal JDK APIs become inaccessible by default without an explicit flag, paving the way for their eventual removal.",
        },
      },
    ],
  },
  {
    version: 17,
    releaseDate: "2021-09-14",
    isLts: true,
    headline: {
      fr: "Les classes scellees se standardisent, le pattern matching arrive dans le switch en preview.",
      en: "Sealed classes become standard, and pattern matching arrives in switch as a preview.",
    },
    highlights: [
      {
        title: { fr: "Classes scellees standardisees", en: "Sealed classes standardized" },
        description: {
          fr: "Combinees aux records, les classes scellees permettent de modeliser des hierarchies de types fermees et exhaustives.",
          en: "Combined with records, sealed classes make it possible to model closed, exhaustive type hierarchies.",
        },
        code: `sealed interface Shape permits Circle, Square, Triangle {}\nrecord Circle(double radius) implements Shape {}\nrecord Square(double side) implements Shape {}\nrecord Triangle(double base, double height) implements Shape {}`,
      },
      {
        title: { fr: "Pattern matching pour switch (preview)", en: "Pattern matching for switch (preview)" },
        description: {
          fr: "Le switch peut tester le type d'un objet et lier une variable, avec un controle d'exhaustivite sur les hierarchies scellees.",
          en: "Switch can test an object's type and bind a variable, with exhaustiveness checking on sealed hierarchies.",
        },
        code: `String describe(Shape shape) {\n    return switch (shape) {\n        case Circle c -> "circle r=" + c.radius();\n        case Square s -> "square side=" + s.side();\n        case Triangle t -> "triangle";\n    };\n}`,
      },
      {
        title: { fr: "Encapsulation forte definitive", en: "Strong encapsulation, no opt-out" },
        description: {
          fr: "L'acces aux APIs internes du JDK non critiques est desormais bloque sans possibilite de le contourner par flag.",
          en: "Access to non-critical internal JDK APIs is now blocked with no flag available to opt back in.",
        },
      },
      {
        title: { fr: "Retrait de l'API Applet", en: "Removal of the Applet API" },
        description: {
          fr: "L'API Applet, deja depreciee, est retiree du JDK apres la disparition du support des applets dans les navigateurs.",
          en: "The already-deprecated Applet API is removed from the JDK, following the disappearance of applet support in browsers.",
        },
      },
      {
        title: { fr: "Nouveaux generateurs de nombres pseudo-aleatoires", en: "New pseudo-random number generators" },
        description: {
          fr: "Une interface RandomGenerator unifiee et de nouveaux algorithmes, plus faciles a decouvrir et a interchanger.",
          en: "A unified RandomGenerator interface and new algorithms, easier to discover and swap between.",
        },
      },
    ],
  },
  {
    version: 18,
    releaseDate: "2022-03-22",
    isLts: false,
    headline: {
      fr: "UTF-8 devient l'encodage par defaut partout, et Java embarque son propre serveur web.",
      en: "UTF-8 becomes the default charset everywhere, and Java ships its own web server.",
    },
    highlights: [
      {
        title: { fr: "UTF-8 par defaut", en: "UTF-8 by default" },
        description: {
          fr: "Charset.defaultCharset() vaut desormais UTF-8 sur toutes les plateformes, eliminant une source classique de bugs lies a l'OS.",
          en: "Charset.defaultCharset() is now UTF-8 on every platform, eliminating a classic source of OS-dependent bugs.",
        },
      },
      {
        title: { fr: "Serveur web minimal (jwebserver)", en: "Simple web server (jwebserver)" },
        description: {
          fr: "Un mini serveur HTTP en ligne de commande, parfait pour servir rapidement des fichiers statiques pendant un prototypage.",
          en: "A minimal command-line HTTP server, perfect for quickly serving static files during prototyping.",
        },
        code: `jwebserver -p 8000`,
      },
      {
        title: { fr: "Extraits de code dans la Javadoc (@snippet)", en: "Code snippets in Javadoc (@snippet)" },
        description: {
          fr: "La balise @snippet permet d'inclure des exemples de code verifies et coloree dans la documentation generee.",
          en: "The @snippet tag allows including verified, syntax-highlighted code examples in generated documentation.",
        },
      },
      {
        title: { fr: "API Vector, deuxieme incubation", en: "Vector API, second incubation" },
        description: {
          fr: "L'API de calcul vectoriel continue d'evoluer avant sa future standardisation.",
          en: "The vector computation API keeps evolving on its path toward eventual standardization.",
        },
      },
    ],
  },
  {
    version: 19,
    releaseDate: "2022-09-20",
    isLts: false,
    headline: {
      fr: "Project Loom arrive : les threads virtuels et la concurrence structuree en preview.",
      en: "Project Loom lands: virtual threads and structured concurrency arrive as previews.",
    },
    highlights: [
      {
        title: { fr: "Threads virtuels (preview)", en: "Virtual threads (preview)" },
        description: {
          fr: "Des threads legers geres par la JVM plutot que par l'OS, permettant des millions d'unites d'execution concurrentes sans en changer le modele de programmation.",
          en: "Lightweight threads managed by the JVM instead of the OS, enabling millions of concurrent units of execution without changing the programming model.",
        },
        code: `try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {\n    executor.submit(() -> System.out.println("running in a virtual thread"));\n}`,
      },
      {
        title: { fr: "Concurrence structuree (incubator)", en: "Structured concurrency (incubator)" },
        description: {
          fr: "Traiter un groupe de taches concurrentes comme une seule unite de travail, avec une gestion coherente des erreurs et des annulations.",
          en: "Treat a group of concurrent tasks as a single unit of work, with coherent error handling and cancellation.",
        },
        code: `try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {\n    var user = scope.fork(() -> fetchUser());\n    var order = scope.fork(() -> fetchOrder());\n    scope.join();\n    scope.throwIfFailed();\n}`,
      },
      {
        title: { fr: "Record patterns (preview)", en: "Record patterns (preview)" },
        description: {
          fr: "Deconstruire un record directement dans un pattern, pour extraire ses composants sans appeler chaque accesseur.",
          en: "Deconstruct a record directly in a pattern, extracting its components without calling each accessor.",
        },
        code: `if (obj instanceof Point(int x, int y)) {\n    System.out.println(x + y);\n}`,
      },
      {
        title: { fr: "Pattern matching pour switch (troisieme preview)", en: "Pattern matching for switch (third preview)" },
        description: {
          fr: "De nouveaux affinements, notamment les clauses when pour ajouter des conditions de garde a un cas.",
          en: "Further refinements, including when clauses to add guard conditions to a case.",
        },
      },
      {
        title: { fr: "API Foreign Function & Memory (deuxieme preview)", en: "Foreign Function & Memory API (second preview)" },
        description: {
          fr: "Appeler du code natif et manipuler de la memoire hors du tas Java, sans passer par JNI.",
          en: "Call native code and manipulate off-heap memory, without going through JNI.",
        },
      },
    ],
  },
  {
    version: 20,
    releaseDate: "2023-03-21",
    isLts: false,
    headline: {
      fr: "Les scoped values font leur apparition, le pattern matching continue de murir.",
      en: "Scoped values make their debut, and pattern matching keeps maturing.",
    },
    highlights: [
      {
        title: { fr: "Scoped values (incubator)", en: "Scoped values (incubator)" },
        description: {
          fr: "Une alternative a ThreadLocal pour partager une donnee immuable a travers un ensemble d'appels, taillee pour les threads virtuels.",
          en: "An alternative to ThreadLocal for sharing an immutable value across a set of calls, designed to work well with virtual threads.",
        },
        code: `static final ScopedValue<String> USER = ScopedValue.newInstance();\n\nScopedValue.where(USER, "riadh").run(() -> System.out.println(USER.get()));`,
      },
      {
        title: { fr: "Record patterns (deuxieme preview)", en: "Record patterns (second preview)" },
        description: {
          fr: "Les patterns de records se generalisent aux structures imbriquees, avec deconstruction en profondeur.",
          en: "Record patterns extend to nested structures, with deep deconstruction.",
        },
        code: `record Point(int x, int y) {}\nrecord Line(Point start, Point end) {}\n\nif (obj instanceof Line(Point(var x1, var y1), Point(var x2, var y2))) {\n    // ...\n}`,
      },
      {
        title: { fr: "Threads virtuels (deuxieme preview)", en: "Virtual threads (second preview)" },
        description: {
          fr: "Des ajustements suite aux retours de la communaute, avant la standardisation prevue dans une future version LTS.",
          en: "Adjustments based on community feedback, ahead of standardization planned for a future LTS release.",
        },
      },
      {
        title: { fr: "Concurrence structuree (deuxieme incubation)", en: "Structured concurrency (second incubation)" },
        description: {
          fr: "L'API continue d'etre affinee en collaboration etroite avec les threads virtuels et les scoped values.",
          en: "The API keeps being refined in close coordination with virtual threads and scoped values.",
        },
      },
    ],
  },
  {
    version: 21,
    releaseDate: "2023-09-19",
    isLts: true,
    headline: {
      fr: "Les threads virtuels et le pattern matching pour switch se standardisent : une LTS majeure pour la concurrence.",
      en: "Virtual threads and pattern matching for switch become standard: a landmark LTS for concurrency.",
    },
    highlights: [
      {
        title: { fr: "Threads virtuels standardises", en: "Virtual threads standardized" },
        description: {
          fr: "Apres deux previews, les threads virtuels deviennent une fonctionnalite stable, permettant un style de code bloquant classique a tres grande echelle.",
          en: "After two previews, virtual threads become a stable feature, enabling classic blocking-style code at massive scale.",
        },
      },
      {
        title: { fr: "Pattern matching pour switch et record patterns standardises", en: "Pattern matching for switch and record patterns standardized" },
        description: {
          fr: "Le switch peut tester des types, deconstruire des records et verifier l'exhaustivite sur des hierarchies scellees.",
          en: "Switch can test types, deconstruct records and check exhaustiveness over sealed hierarchies.",
        },
        code: `sealed interface Shape permits Circle, Square {}\nrecord Circle(double radius) implements Shape {}\nrecord Square(double side) implements Shape {}\n\ndouble area(Shape shape) {\n    return switch (shape) {\n        case Circle(double r) -> Math.PI * r * r;\n        case Square(double side) -> side * side;\n    };\n}`,
      },
      {
        title: { fr: "Sequenced collections", en: "Sequenced collections" },
        description: {
          fr: "De nouvelles interfaces (SequencedCollection, SequencedSet, SequencedMap) offrent enfin getFirst, getLast et reversed de maniere uniforme.",
          en: "New interfaces (SequencedCollection, SequencedSet, SequencedMap) finally provide getFirst, getLast and reversed uniformly.",
        },
        code: `List<Integer> numbers = new ArrayList<>(List.of(1, 2, 3));\nnumbers.getFirst();   // 1\nnumbers.reversed();   // [3, 2, 1]`,
      },
      {
        title: { fr: "String templates (preview, retiree ensuite)", en: "String templates (preview, later withdrawn)" },
        description: {
          fr: "Une interpolation de chaines securisee avec STR. \"Bonjour \\{name}\". La fonctionnalite sera finalement retiree en Java 23 pour etre repensee.",
          en: "Safe string interpolation via STR.\"Hello \\{name}\". The feature was ultimately withdrawn in Java 23 to be redesigned.",
        },
      },
      {
        title: { fr: "ZGC generationnel", en: "Generational ZGC" },
        description: {
          fr: "ZGC gere desormais separement les jeunes et les vieux objets, ameliorant nettement le debit tout en gardant des pauses tres courtes.",
          en: "ZGC now manages young and old objects separately, noticeably improving throughput while keeping pause times very short.",
        },
      },
    ],
  },
  {
    version: 22,
    releaseDate: "2024-03-19",
    isLts: false,
    headline: {
      fr: "Les variables et patterns sans nom simplifient le code, l'API Foreign Function se standardise.",
      en: "Unnamed variables and patterns tidy up the code, and the Foreign Function API becomes standard.",
    },
    highlights: [
      {
        title: { fr: "Variables et patterns sans nom (_)", en: "Unnamed variables and patterns (_)" },
        description: {
          fr: "Le caractere _ marque une variable ou un composant de pattern volontairement ignore, rendant l'intention plus lisible.",
          en: "The _ character marks a variable or pattern component that is deliberately ignored, making intent clearer.",
        },
        code: `if (obj instanceof Point(var x, _)) {\n    System.out.println(x);\n}\n\nfor (var _ : items) {\n    count++;\n}`,
      },
      {
        title: { fr: "API Foreign Function & Memory standardisee", en: "Foreign Function & Memory API standardized" },
        description: {
          fr: "Appeler des bibliotheques natives et manipuler de la memoire hors tas devient une fonctionnalite stable, sans passer par JNI.",
          en: "Calling native libraries and manipulating off-heap memory becomes a stable feature, without going through JNI.",
        },
      },
      {
        title: { fr: "Stream gatherers (preview)", en: "Stream gatherers (preview)" },
        description: {
          fr: "Une API pour ecrire ses propres operations intermediaires de Stream, au-dela de ce que map/filter/reduce permettent.",
          en: "An API for writing custom intermediate Stream operations, beyond what map/filter/reduce allow.",
        },
        code: `list.stream()\n    .gather(Gatherers.windowFixed(2))\n    .toList();`,
      },
      {
        title: { fr: "Instructions avant super(...) (preview)", en: "Statements before super(...) (preview)" },
        description: {
          fr: "Un constructeur peut executer du code de validation ou de preparation avant d'appeler le constructeur parent.",
          en: "A constructor can now run validation or setup code before calling the parent constructor.",
        },
      },
    ],
  },
  {
    version: 23,
    releaseDate: "2024-09-17",
    isLts: false,
    headline: {
      fr: "Les types primitifs entrent dans le pattern matching, les imports de modules simplifient les scripts.",
      en: "Primitive types join pattern matching, and module imports simplify small scripts.",
    },
    highlights: [
      {
        title: { fr: "Types primitifs dans les patterns (preview)", en: "Primitive types in patterns (preview)" },
        description: {
          fr: "instanceof et switch peuvent desormais tester des types primitifs comme int ou double, plus seulement des types reference.",
          en: "instanceof and switch can now test primitive types like int or double, not just reference types.",
        },
        code: `switch (obj) {\n    case Integer i when i > 0 -> System.out.println("positive int " + i);\n    case Double d -> System.out.println("a double " + d);\n    default -> {}\n}`,
      },
      {
        title: { fr: "Declarations d'import de module (preview)", en: "Module import declarations (preview)" },
        description: {
          fr: "Un seul import module java.base remplace une longue liste d'imports, pratique pour les scripts et les demos courtes.",
          en: "A single import module java.base replaces a long list of imports, handy for scripts and short demos.",
        },
        code: `import module java.base;`,
      },
      {
        title: { fr: "String templates retirees", en: "String templates withdrawn" },
        description: {
          fr: "Face aux retours mitiges de la communaute, la fonctionnalite preview des String templates est retiree pour etre repensee en profondeur.",
          en: "Following mixed community feedback, the preview String templates feature is withdrawn to be redesigned from the ground up.",
        },
      },
      {
        title: { fr: "API Class-File (deuxieme preview)", en: "Class-File API (second preview)" },
        description: {
          fr: "Une API standard pour parser et generer des fichiers .class, destinee a remplacer des bibliotheques tierces comme ASM.",
          en: "A standard API for parsing and generating .class files, intended to replace third-party libraries like ASM.",
        },
      },
    ],
  },
  {
    version: 24,
    releaseDate: "2025-03-18",
    isLts: false,
    headline: {
      fr: "Les stream gatherers se standardisent, et les threads virtuels perdent leur talon d'Achille sur synchronized.",
      en: "Stream gatherers become standard, and virtual threads lose their synchronized-block Achilles heel.",
    },
    highlights: [
      {
        title: { fr: "Stream gatherers standardises", en: "Stream gatherers standardized" },
        description: {
          fr: "Apres une preview en Java 22, l'API pour ecrire des operations intermediaires de Stream personnalisees devient stable.",
          en: "After a preview in Java 22, the API for writing custom intermediate Stream operations becomes stable.",
        },
      },
      {
        title: { fr: "API Class-File standardisee", en: "Class-File API standardized" },
        description: {
          fr: "Le JDK dispose enfin d'une API stable pour lire et generer du bytecode, reduisant sa propre dependance a des bibliotheques externes.",
          en: "The JDK finally has a stable API to read and generate bytecode, reducing its own dependency on external libraries.",
        },
      },
      {
        title: { fr: "Fin de l'epinglage des threads virtuels sur synchronized", en: "Virtual thread pinning on synchronized removed" },
        description: {
          fr: "Un bloc synchronized ne bloque plus le thread porteur (carrier thread) sous-jacent, levant une limitation majeure de l'adoption des threads virtuels.",
          en: "A synchronized block no longer blocks the underlying carrier thread, removing a major limitation to adopting virtual threads.",
        },
      },
      {
        title: { fr: "Shenandoah generationnel", en: "Generational Shenandoah" },
        description: {
          fr: "Le ramasse-miettes Shenandoah adopte a son tour une gestion generationnelle pour ameliorer son debit.",
          en: "The Shenandoah garbage collector adopts generational management in turn to improve throughput.",
        },
      },
      {
        title: { fr: "Algorithmes post-quantiques standardises", en: "Post-quantum algorithms standardized" },
        description: {
          fr: "ML-KEM et ML-DSA, des algorithmes resistants aux ordinateurs quantiques, rejoignent les fournisseurs de securite standard du JDK.",
          en: "ML-KEM and ML-DSA, quantum-resistant algorithms, join the JDK's standard security providers.",
        },
      },
    ],
  },
  {
    version: 25,
    releaseDate: "2025-09-16",
    isLts: true,
    headline: {
      fr: "Fini le boilerplate pour un premier programme : les fichiers source compacts se standardisent, avec la concurrence structuree.",
      en: "No more boilerplate for a first program: compact source files become standard, alongside structured concurrency.",
    },
    highlights: [
      {
        title: { fr: "Fichiers source compacts et methode main d'instance", en: "Compact source files and instance main methods" },
        description: {
          fr: "Un premier programme Java ne demande plus public static void main(String[] args) ni meme de classe explicite : main() suffit.",
          en: "A first Java program no longer requires public static void main(String[] args) or even an explicit class: main() is enough.",
        },
        code: `void main() {\n    System.out.println("Hello, Java 25!");\n}`,
      },
      {
        title: { fr: "Scoped values standardises", en: "Scoped values standardized" },
        description: {
          fr: "Apres plusieurs previews, les scoped values deviennent l'alternative stable et recommandee a ThreadLocal pour le partage immuable de contexte.",
          en: "After several previews, scoped values become the stable, recommended alternative to ThreadLocal for sharing immutable context.",
        },
      },
      {
        title: { fr: "Concurrence structuree standardisee", en: "Structured concurrency standardized" },
        description: {
          fr: "Un groupe de sous-taches concurrentes se traite enfin comme une unite unique, avec propagation coherente des erreurs et des annulations.",
          en: "A group of concurrent subtasks can finally be treated as a single unit, with coherent error propagation and cancellation.",
        },
      },
      {
        title: { fr: "API PEM standard", en: "Standard PEM API" },
        description: {
          fr: "Encoder et decoder des cles et certificats au format PEM ne demande plus de bibliotheque tierce ni de manipulation manuelle de texte.",
          en: "Encoding and decoding keys and certificates in PEM format no longer requires a third-party library or manual text wrangling.",
        },
      },
      {
        title: { fr: "API de derivation de cles (KDF)", en: "Key Derivation Function (KDF) API" },
        description: {
          fr: "Une API standard pour deriver des cles cryptographiques a partir d'un secret, par exemple avec HKDF.",
          en: "A standard API for deriving cryptographic keys from a secret, for example using HKDF.",
        },
      },
    ],
  },
];

export function getJavaVersion(version: number): JavaVersion | undefined {
  return javaVersions.find((entry) => entry.version === version);
}

export function getAdjacentVersions(version: number): {
  previous?: JavaVersion;
  next?: JavaVersion;
} {
  const index = javaVersions.findIndex((entry) => entry.version === version);
  if (index === -1) {
    return {};
  }
  return {
    previous: javaVersions[index - 1],
    next: javaVersions[index + 1],
  };
}
