    (function () {
      const STORAGE_KEY = "minha-rede-preview-v2";
      const fallbackImages = [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
      ];
      const peopleProfiles = {
        "joao-silva": {
          id: "joao-silva",
          name: "Joao Silva",
          avatar: "https://i.pravatar.cc/150?img=3",
          verified: true,
          tagline: "Criador de conteudo e amante de praia.",
          bio: "Fotografo amador, surfista de fim de semana e sempre atras de bons lugares para registrar.",
          location: "Sao Paulo, Brasil",
          work: "Criador de conteudo",
          website: "https://minharede.demo/joao",
          coverImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80"
        },
        "maria-souza": {
          id: "maria-souza",
          name: "Maria Souza",
          avatar: "https://i.pravatar.cc/150?img=5",
          verified: true,
          tagline: "Projetos, estrategia e rotina criativa.",
          bio: "Construo produtos digitais, organizo ideias e adoro compartilhar bastidores do processo.",
          location: "Campinas, Brasil",
          work: "Product Designer",
          website: "https://minharede.demo/maria",
          coverImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80"
        },
        "carlos-oliveira": {
          id: "carlos-oliveira",
          name: "Carlos Oliveira",
          avatar: "https://i.pravatar.cc/150?img=8",
          verified: false,
          tagline: "Pedalando por ai e registrando a cidade.",
          bio: "Curto trilhas urbanas, cafes pequenos e grupos de pedal aos fins de tarde.",
          location: "Belo Horizonte, Brasil",
          work: "Analista de operacoes",
          website: "",
          coverImage: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=80"
        },
        "ana-lima": {
          id: "ana-lima",
          name: "Ana Lima",
          avatar: "https://i.pravatar.cc/150?img=9",
          verified: false,
          tagline: "Livros, cafe e playlists tranquilas.",
          bio: "Leio bastante, coleciono recomendacoes culturais e gosto de dividir momentos leves por aqui.",
          location: "Curitiba, Brasil",
          work: "Redatora",
          website: "",
          coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
        },
        "pedro-alves": {
          id: "pedro-alves",
          name: "Pedro Alves",
          avatar: "https://i.pravatar.cc/150?img=12",
          verified: false,
          tagline: "Setup, produtividade e pequenos upgrades.",
          bio: "Sempre testando algo novo na mesa de trabalho e no home office.",
          location: "Santos, Brasil",
          work: "Tecnico de suporte",
          website: "",
          coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
        },
        "carla-nunes": {
          id: "carla-nunes",
          name: "Carla Nunes",
          avatar: "https://i.pravatar.cc/150?img=21",
          verified: true,
          tagline: "Nova por aqui e aberta a conexoes criativas.",
          bio: "Entrei agora na rede para trocar referencias e encontrar gente interessante.",
          location: "Recife, Brasil",
          work: "Social Media",
          website: "",
          coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80"
        },
        "rafael-lima": {
          id: "rafael-lima",
          name: "Rafael Lima",
          avatar: "https://i.pravatar.cc/150?img=22",
          verified: false,
          tagline: "Conectando pessoas e projetos.",
          bio: "Gosto de networking, comunidades e eventos presenciais.",
          location: "Rio de Janeiro, Brasil",
          work: "Community Manager",
          website: "",
          coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
        },
        "bianca-costa": {
          id: "bianca-costa",
          name: "Bianca Costa",
          avatar: "https://i.pravatar.cc/150?img=23",
          verified: false,
          tagline: "Talvez a gente ja se conheca de algum projeto.",
          bio: "Trabalho com conteudo visual e adoro conhecer novas referencias.",
