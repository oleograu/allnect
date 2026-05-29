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
          location: "Florianopolis, Brasil",
          work: "Diretora de arte",
          website: "",
          coverImage: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1600&q=80"
        }
      };
      const reactionOptions = [
        { key: "like", label: "Curtir", emoji: "ðŸ‘" },
        { key: "love", label: "Amei", emoji: "â¤ï¸" },
        { key: "haha", label: "Haha", emoji: "ðŸ˜‚" },
        { key: "wow", label: "Uau", emoji: "ðŸ˜®" },
        { key: "sad", label: "Triste", emoji: "ðŸ˜¢" },
        { key: "angry", label: "Bravo", emoji: "ðŸ˜¡" }
      ];

      const chatEmojiOptions = [
        "\uD83D\uDE00", "\uD83D\uDE03", "\uD83D\uDE04", "\uD83D\uDE01", "\uD83D\uDE06", "\uD83D\uDE05",
        "\uD83D\uDE02", "\uD83E\uDD23", "\uD83D\uDE09", "\uD83D\uDE0A", "\uD83D\uDE0D", "\uD83E\uDD70",
        "\uD83D\uDE18", "\uD83D\uDE17", "\uD83D\uDE0B", "\uD83D\uDE0E", "\uD83E\uDD29", "\uD83E\uDD2F",
        "\uD83D\uDE2E", "\uD83D\uDE31", "\uD83D\uDE2D", "\uD83D\uDE22", "\uD83D\uDE24", "\uD83D\uDE21",
        "\uD83D\uDE20", "\uD83E\uDD14", "\uD83E\uDD2D", "\uD83E\uDD2A", "\uD83D\uDE34", "\uD83E\uDD73",
        "\uD83D\uDC4D", "\uD83D\uDC4E", "\uD83D\uDC4F", "\uD83D\uDE4C", "\uD83D\uDE4F", "\uD83E\uDD1D",
        "\uD83D\uDC4A", "\u270C\uFE0F", "\uD83E\uDD18", "\uD83D\uDC9E", "\uD83D\uDCAA", "\u2764\uFE0F",
        "\uD83D\uDC96", "\uD83D\uDC99", "\uD83D\uDC9A", "\uD83D\uDC9B", "\uD83E\uDDE1", "\uD83D\uDCAF",
        "\uD83D\uDD25", "\u2B50", "\uD83C\uDF89", "\uD83C\uDF8A", "\uD83C\uDF88", "\uD83D\uDC4C",
        "\uD83D\uDE80", "\uD83C\uDF1F", "\u26A1", "\uD83C\uDF40", "\uD83C\uDF1E", "\uD83C\uDF0A"
      ];

      const defaultState = {
        ui: {
          search: "",
          chatSearch: "",
          marketplaceSearch: "",
          marketplaceCategory: "all",
          marketplaceView: "all",
          marketplaceSort: "recent",
          marketplaceMinPrice: "",
          marketplaceMaxPrice: "",
          activeTab: "home",
          theme: "light",
          composerPanel: "",
          notificationsOpen: false,
          chatOpen: false,
          activeChatPersonId: "joao-silva",
          modal: null
        },
        currentUser: {
          id: "user-1",
          name: "Voce",
          avatar: "https://i.pravatar.cc/150?img=15",
          tagline: "Compartilhe momentos, ideias e oportunidades.",
          verified: true,
          role: "admin",
          bio: "Criador em fase de testes, montando um perfil social completo com posts, stories e marketplace.",
          location: "Sao Paulo, Brasil",
          work: "Designer de interfaces",
          website: "https://minharede.demo/perfil",
          email: "voce@minharede.demo",
          phone: "+55 11 99999-9999",
          birthday: "1998-08-12",
          coverImage: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1600&q=80",
          visibility: {
            email: true,
            phone: false,
            birthday: true
          }
        },
        stories: [
          {
            id: "story-1",
            personId: "joao-silva",
            name: "Joao",
            avatar: "https://i.pravatar.cc/150?img=1",
            status: "Saiu cedo para surfar e ver o mar.",
            verified: true
          },
          {
            id: "story-2",
            personId: "maria-souza",
            name: "Maria",
            avatar: "https://i.pravatar.cc/150?img=5",
            status: "Mostrando os bastidores de um novo projeto.",
            verified: true
          },
          {
            id: "story-3",
            personId: "carlos-oliveira",
            name: "Carlos",
            avatar: "https://i.pravatar.cc/150?img=8",
            status: "Pedalando pela cidade no fim da tarde."
          },
          {
            id: "story-4",
            personId: "ana-lima",
            name: "Ana",
            avatar: "https://i.pravatar.cc/150?img=9",
            status: "Cafe, livro e uma playlist tranquila."
          },
          {
            id: "story-5",
            personId: "pedro-alves",
            name: "Pedro",
            avatar: "https://i.pravatar.cc/150?img=12",
            status: "Testando um novo setup no escritorio."
          }
        ],
        reels: [
          {
            id: "reel-1",
            personId: "joao-silva",
            name: "Joao Silva",
            avatar: "https://i.pravatar.cc/150?img=3",
            verified: true,
            coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
            caption: "Resumo rapido da manha na praia, luz boa e mar tranquilo.",
            audio: "Som ambiente da praia",
            duration: "0:18",
            likes: 142,
            views: 820,
            watched: false
          },
          {
            id: "reel-2",
            personId: "maria-souza",
            name: "Maria Souza",
            avatar: "https://i.pravatar.cc/150?img=5",
            verified: true,
            coverImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
            caption: "Bastidores do novo projeto, organizando fluxos e referencias.",
            audio: "Beat criativo",
            duration: "0:24",
            likes: 198,
            views: 1104,
            watched: false
          },
          {
            id: "reel-3",
            personId: "ana-lima",
            name: "Ana Lima",
            avatar: "https://i.pravatar.cc/150?img=9",
            verified: false,
            coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
            caption: "Leitura, cafe e uma pausa boa no meio da tarde.",
            audio: "Lo-fi leve",
            duration: "0:16",
            likes: 87,
            views: 502,
            watched: false
          }
        ],
        posts: [
          {
            id: "post-1",
            authorId: "joao-silva",
            name: "Joao Silva",
            avatar: "https://i.pravatar.cc/150?img=3",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
            content: "Curtindo o dia na praia e aproveitando o sol.",
            likes: 24,
            shares: 3,
            verified: true,
            liked: false,
            reaction: null,
            showReactions: false,
            showComments: false,
            createdAt: "Hoje, 09:10",
            comments: [
              { id: "c-1", author: "Ana", text: "Que vista boa." },
              { id: "c-2", author: "Carlos", text: "A energia desse lugar e boa demais." }
            ]
          },
          {
            id: "post-2",
            authorId: "maria-souza",
            name: "Maria Souza",
            avatar: "https://i.pravatar.cc/150?img=5",
            image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
            content: "Trabalhando em novos projetos e organizando ideias para a semana.",
            likes: 18,
            shares: 2,
            verified: true,
            liked: false,
            reaction: null,
            showReactions: false,
            showComments: false,
            createdAt: "Hoje, 11:45",
            comments: [
              { id: "c-3", author: "Joao", text: "Gostei da ideia, depois me mostra." }
            ]
          }
        ],
        products: [
          {
            id: "product-1",
            ownerId: "joao-silva",
            name: "iPhone 11",
            price: 2300,
            image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80",
            location: "Sao Paulo",
            description: "Aparelho em bom estado, 128 GB, sem trincas.",
            owner: "Joao Silva"
          },
          {
            id: "product-2",
            ownerId: "maria-souza",
            name: "Bicicleta Aro 29",
            price: 850,
            image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=600&q=80",
            location: "Campinas",
            description: "Ideal para trilha leve e uso urbano.",
            owner: "Maria Souza"
          },
          {
            id: "product-3",
            ownerId: "pedro-alves",
            name: "Sofa 3 Lugares",
            price: 1200,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
            location: "Santos",
            description: "Confortavel, tecido em bom estado e estrutura firme.",
            owner: "Pedro Alves"
          }
        ],
        suggestions: [
          {
            id: "friend-1",
            personId: "carla-nunes",
            name: "Carla Nunes",
            subtitle: "Novo por aqui",
            avatar: "https://i.pravatar.cc/150?img=21",
            verified: true,
            added: false
          },
          {
            id: "friend-2",
            personId: "rafael-lima",
            name: "Rafael Lima",
            subtitle: "5 amigos em comum",
            avatar: "https://i.pravatar.cc/150?img=22",
            added: false
          },
          {
            id: "friend-3",
            personId: "bianca-costa",
            name: "Bianca Costa",
            subtitle: "Talvez voce conheca",
            avatar: "https://i.pravatar.cc/150?img=23",
            added: false
          }
        ],
        notifications: [
          {
            id: "note-1",
            text: "Maria publicou uma nova atualizacao no feed.",
            time: "Hoje, 11:45",
            unread: true
          },
          {
            id: "note-2",
            text: "Tem 3 produtos em destaque no marketplace.",
            time: "Hoje, 10:20",
            unread: true
          },
          {
            id: "note-3",
            text: "Abra um story para testar a visualizacao.",
            time: "Hoje, 09:00",
            unread: false
          }
        ],
        chats: [
          {
            id: "chat-joao",
            personId: "joao-silva",
            messages: [
              {
                id: "msg-1",
                senderId: "joao-silva",
                text: "Oi, depois te mostro umas fotos da praia.",
                time: "09:18",
                read: false
              },
              {
                id: "msg-2",
                senderId: "user-1",
                text: "Quero ver sim. Me manda quando puder.",
                time: "09:20",
                read: true
              }
            ]
          },
          {
            id: "chat-maria",
            personId: "maria-souza",
            messages: [
              {
                id: "msg-3",
                senderId: "maria-souza",
                text: "Estou fechando a proposta do projeto novo.",
                time: "11:52",
                read: false
              }
            ]
          },
          {
            id: "chat-carla",
            personId: "carla-nunes",
            messages: [
              {
                id: "msg-4",
                senderId: "carla-nunes",
                text: "Oi, entrei agora na rede. Vamos trocar referencias?",
                time: "12:05",
                read: false
              }
            ]
          }
        ]
      };

      let state = loadState();
      let toastTimer = null;

      const elements = {
        searchInput: document.getElementById("searchInput"),
        searchResultsSection: document.getElementById("searchResultsSection"),
        searchResultsSummary: document.getElementById("searchResultsSummary"),
        searchResultsGrid: document.getElementById("searchResultsGrid"),
        currentUserAvatar: document.getElementById("currentUserAvatar"),
        currentUserName: document.getElementById("currentUserName"),
        currentUserTagline: document.getElementById("currentUserTagline"),
        composerCard: document.getElementById("composerCard"),
        storiesSection: document.getElementById("storiesSection"),
        mainLayout: document.getElementById("mainLayout"),
        mainColumn: document.getElementById("mainColumn"),
        sidebarColumn: document.getElementById("sidebarColumn"),
        feedHeading: document.getElementById("feedHeading"),
        composerForm: document.getElementById("composerForm"),
        composerText: document.getElementById("composerText"),
        composerFilesButton: document.getElementById("composerFilesButton"),
        composerCheckinButton: document.getElementById("composerCheckinButton"),
        composerFeelingButton: document.getElementById("composerFeelingButton"),
        composerFilesPanel: document.getElementById("composerFilesPanel"),
        composerCheckinPanel: document.getElementById("composerCheckinPanel"),
        composerFeelingPanel: document.getElementById("composerFeelingPanel"),
        composerAttachment: document.getElementById("composerAttachment"),
        composerCheckin: document.getElementById("composerCheckin"),
        composerFeeling: document.getElementById("composerFeeling"),
        storiesList: document.getElementById("storiesList"),
        storiesSummary: document.getElementById("storiesSummary"),
        storyChip: document.getElementById("storyChip"),
        reelsList: document.getElementById("reelsList"),
        reelsSummary: document.getElementById("reelsSummary"),
        reelsChip: document.getElementById("reelsChip"),
        reelsSection: document.getElementById("reelsSection"),
        marketplacePageSection: document.getElementById("marketplacePageSection"),
        feedTitle: document.getElementById("feedTitle"),
        feedSummary: document.getElementById("feedSummary"),
        postsList: document.getElementById("postsList"),
        emptyState: document.getElementById("emptyState"),
        productsList: document.getElementById("productsList"),
        productsSummary: document.getElementById("productsSummary"),
        friendsList: document.getElementById("friendsList"),
        friendsSummary: document.getElementById("friendsSummary"),
        friendsChip: document.getElementById("friendsChip"),
        alertBadge: document.getElementById("alertBadge"),
        chatBadge: document.getElementById("chatBadge"),
        notificationsDrawer: document.getElementById("notificationsDrawer"),
        chatDrawer: document.getElementById("chatDrawer"),
        modalLayer: document.getElementById("modalLayer"),
        toast: document.getElementById("toast"),
        profileAvatar: document.getElementById("profileAvatar"),
        profileName: document.getElementById("profileName"),
        profileSubtitle: document.getElementById("profileSubtitle"),
        profileBioPreview: document.getElementById("profileBioPreview"),
        profileMetaLine: document.getElementById("profileMetaLine"),
        profileStatus: document.getElementById("profileStatus"),
        statPosts: document.getElementById("statPosts"),
        statLikes: document.getElementById("statLikes"),
        statFriends: document.getElementById("statFriends"),
        statStories: document.getElementById("statStories"),
        trendingSummary: document.getElementById("trendingSummary"),
        trendingChip: document.getElementById("trendingChip"),
        trendingList: document.getElementById("trendingList"),
        marketplaceSection: document.getElementById("marketplaceSection"),
        friendsSection: document.getElementById("friendsSection")
      };

      wireEvents();
      render();

      function wireEvents() {
        elements.searchInput.addEventListener("input", function (event) {
          state.ui.search = event.target.value;
          render();
        });

        document.addEventListener("input", function (event) {
          if (event.target && event.target.id === "chatSearchInput") {
            const value = event.target.value;
            const caret = typeof event.target.selectionStart === "number" ? event.target.selectionStart : value.length;
            state.ui.chatSearch = value;
            render();
            setTimeout(function () {
              const input = document.getElementById("chatSearchInput");
              if (!input) {
                return;
              }
              input.focus();
              if (typeof input.setSelectionRange === "function") {
                input.setSelectionRange(caret, caret);
              }
            }, 0);
          }

          if (event.target && event.target.id === "marketplaceSearchInput") {
            state.ui.marketplaceSearch = event.target.value;
            render();
          }

          if (event.target && event.target.id === "marketplaceMinPrice") {
            state.ui.marketplaceMinPrice = event.target.value;
            render();
          }

          if (event.target && event.target.id === "marketplaceMaxPrice") {
            state.ui.marketplaceMaxPrice = event.target.value;
            render();
          }
        });

        document.addEventListener("change", function (event) {
          if (event.target && event.target.id === "marketplaceSortSelect") {
            state.ui.marketplaceSort = event.target.value || "recent";
            render();
          }
        });

        document.addEventListener("click", function (event) {
          if (!event.target.closest(".chat-emoji-wrap")) {
            closeChatEmojiPicker();
          }

          const target = event.target.closest("[data-action]");
          if (!target) {
            if (event.target === elements.modalLayer) {
              closeModal();
              return;
            }
            const hasOpenReaction = state.posts.some(function (post) {
              return post.showReactions;
            });
            if (hasOpenReaction) {
              closeReactionMenus();
              render();
            }
            return;
          }

          const action = target.getAttribute("data-action");
          if (action === "go-home") {
            state.ui.activeTab = "home";
            state.ui.search = "";
            state.ui.notificationsOpen = false;
            elements.searchInput.value = "";
            render();
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
          }

          if (action === "open-friends") {
            state.ui.activeTab = "friends";
            render();
            elements.friendsSection.scrollIntoView({ behavior: "smooth", block: "start" });
            showToast("Area de amigos em foco.");
            return;
          }

          if (action === "open-reels") {
            state.ui.activeTab = "reels-page";
            render();
            window.scrollTo({ top: 0, behavior: "smooth" });
            showToast("Pagina de reels aberta.");
            return;
          }

          if (action === "open-marketplace") {
            state.ui.activeTab = "marketplace-page";
            state.ui.search = "";
            elements.searchInput.value = "";
            render();
            window.scrollTo({ top: 0, behavior: "smooth" });
            showToast("Pagina do marketplace aberta.");
            return;
          }

          if (action === "focus-composer") {
            state.ui.activeTab = "create";
            state.ui.modal = null;
            render();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setTimeout(function () {
              elements.composerText.focus();
            }, 120);
            showToast("Pronto para criar um novo post.");
            return;
          }

          if (action === "toggle-notifications") {
            state.ui.chatOpen = false;
            state.ui.notificationsOpen = !state.ui.notificationsOpen;
            if (state.ui.notificationsOpen) {
              markNotificationsAsRead();
            }
            render();
            return;
          }

          if (action === "toggle-chat") {
            state.ui.notificationsOpen = false;
            if (!state.ui.chatOpen) {
              state.ui.modal = null;
            }
            state.ui.chatOpen = !state.ui.chatOpen;
            if (state.ui.chatOpen && state.ui.activeChatPersonId) {
              markChatAsRead(state.ui.activeChatPersonId);
            }
            render();
            return;
          }

          if (action === "open-admin") {
            state.ui.modal = { type: "admin" };
            state.ui.chatOpen = false;
            state.ui.notificationsOpen = false;
            render();
            showToast("Painel de admin aberto.");
            return;
          }

          if (action === "open-verified-profiles") {
            state.ui.modal = { type: "verified-profiles" };
            render();
            showToast("Lista de perfis verificados aberta.");
            return;
          }

          if (action === "close-chat") {
            state.ui.chatOpen = false;
            render();
            return;
          }

          if (action === "focus-chat-search") {
            const input = document.getElementById("chatSearchInput");
            if (input) {
              input.focus();
            }
            return;
          }

          if (action === "chat-audio-call" || action === "chat-video-call") {
            const person = getPersonProfile(state.ui.activeChatPersonId);
            showToast((action === "chat-video-call" ? "Videochamada" : "Ligacao") + " pronta para " + (person ? person.name : "essa pessoa") + ".");
            return;
          }

          if (action === "open-chat") {
            const personId = target.getAttribute("data-person-id") || state.ui.activeChatPersonId;
            openChatWithPerson(personId);
            return;
          }

          if (action.indexOf("admin-") === 0) {
            adminAction(action.replace("admin-", ""));
            return;
          }

          if (action === "select-chat") {
            const personId = target.getAttribute("data-person-id");
            if (!personId) {
              return;
            }
            state.ui.activeChatPersonId = personId;
            markChatAsRead(personId);
            render();
            return;
          }

          if (action === "toggle-chat-emoji") {
            event.preventDefault();
            toggleChatEmojiPicker();
            return;
          }

          if (action === "insert-chat-emoji") {
            event.preventDefault();
            insertChatEmoji(target.getAttribute("data-emoji") || "");
            return;
          }

          if (action === "close-notifications") {
            state.ui.notificationsOpen = false;
            render();
            return;
          }

          if (action === "mark-all-read") {
            markNotificationsAsRead();
            render();
            showToast("Notificacoes marcadas como lidas.");
            return;
          }

          if (action === "open-profile") {
            state.ui.activeTab = "profile";
            state.ui.modal = { type: "profile" };
            render();
            showToast("Perfil completo aberto.");
            return;
          }

          if (action === "open-person-profile") {
            const personId = target.getAttribute("data-person-id");
            if (!personId) {
              return;
            }
            if (personId === state.currentUser.id) {
              state.ui.activeTab = "profile";
              state.ui.modal = { type: "profile" };
              render();
              showToast("Abrindo seu perfil.");
              return;
            }
            state.ui.modal = { type: "person-profile", id: personId };
            render();
            showToast("Perfil da pessoa aberto.");
            return;
          }

          if (action === "open-post-result") {
            const postId = target.getAttribute("data-post-id");
            if (!postId) {
              return;
            }
            state.ui.activeTab = "home";
            render();
            window.setTimeout(function () {
              const card = document.getElementById("post-card-" + postId);
              if (card) {
                card.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }, 120);
            showToast("Post localizado no feed.");
            return;
          }

          if (action === "open-profile-settings") {
            state.ui.activeTab = "profile";
            state.ui.modal = { type: "profile-settings" };
            render();
            showToast("Configuracao de perfil aberta.");
            return;
          }

          if (action === "clear-composer") {
            resetComposerFields();
            showToast("Campos do post limpos.");
            return;
          }

          if (action === "toggle-composer-files") {
            toggleComposerPanel("files");
            return;
          }

          if (action === "toggle-composer-checkin") {
            toggleComposerPanel("checkin");
            return;
          }

          if (action === "toggle-composer-feeling") {
            toggleComposerPanel("feeling");
            return;
          }

          if (action === "open-story") {
            const storyId = target.getAttribute("data-story-id");
            openStory(storyId);
            return;
          }

          if (action === "open-create-story") {
            state.ui.modal = { type: "create-story" };
            render();
            showToast("Crie um story novo para a fileira.");
            return;
          }

          if (action === "open-reel") {
            const reelId = target.getAttribute("data-reel-id");
            openReelModal(reelId);
            return;
          }

          if (action === "step-reel") {
            const direction = target.getAttribute("data-direction");
            stepReelModal(direction === "prev" ? -1 : 1);
            return;
          }

          if (action === "like-post") {
            const postId = target.getAttribute("data-post-id");
            toggleLike(postId);
            return;
          }

          if (action === "select-reaction") {
            const postId = target.getAttribute("data-post-id");
            const reactionKey = target.getAttribute("data-reaction");
            selectReaction(postId, reactionKey);
            return;
          }

          if (action === "toggle-comments") {
            const postId = target.getAttribute("data-post-id");
            toggleComments(postId);
            return;
          }

          if (action === "share-post") {
            const postId = target.getAttribute("data-post-id");
            sharePost(postId);
            return;
          }

          if (action === "edit-post") {
            const postId = target.getAttribute("data-post-id");
            if (!postId) {
              return;
            }
            state.ui.modal = { type: "edit-post", id: postId };
            render();
            showToast("Editor de post aberto.");
            return;
          }

          if (action === "delete-post") {
            const postId = target.getAttribute("data-post-id");
            if (!postId) {
              return;
            }
            state.ui.modal = { type: "delete-post", id: postId };
            render();
            return;
          }

          if (action === "open-product") {
            openProductModal(target.getAttribute("data-product-id"));
            return;
          }

          if (action === "interest-product") {
            const productId = target.getAttribute("data-product-id");
            registerProductInterest(productId);
            return;
          }

          if (action === "toggle-save-product") {
            const productId = target.getAttribute("data-product-id");
            toggleSaveProduct(productId);
            return;
          }

          if (action === "set-marketplace-view") {
            state.ui.marketplaceView = target.getAttribute("data-marketplace-view") || "all";
            render();
            return;
          }

          if (action === "set-marketplace-category") {
            state.ui.marketplaceCategory = target.getAttribute("data-marketplace-category") || "all";
            render();
            return;
          }

          if (action === "reset-marketplace-filters") {
            resetMarketplaceFilters();
            return;
          }

          if (action === "open-trending-topic") {
            const topic = target.getAttribute("data-topic") || "";
            if (!topic) {
              return;
            }
            state.ui.activeTab = "home";
            state.ui.search = topic;
            elements.searchInput.value = topic;
            render();
            window.scrollTo({ top: 0, behavior: "smooth" });
            showToast("Buscando por " + topic + ".");
            return;
          }

          if (action === "toggle-friend") {
            const friendId = target.getAttribute("data-friend-id");
            toggleFriend(friendId);
            return;
          }

          if (action === "open-sell-modal") {
            state.ui.modal = { type: "sell" };
            render();
            return;
          }

          if (action === "reset-profile-settings") {
            resetProfileSettings();
            return;
          }

          if (action === "close-modal") {
            closeModal();
          }
        });

        document.addEventListener("submit", function (event) {
          if (event.target.id === "composerForm") {
            event.preventDefault();
            publishPost();
            return;
          }

          if (event.target.matches(".comment-form")) {
            event.preventDefault();
            addComment(event.target);
            return;
          }

          if (event.target.id === "sellForm") {
            event.preventDefault();
            addProduct(event.target);
            return;
          }

          if (event.target.id === "storyForm") {
            event.preventDefault();
            addStory(event.target);
            return;
          }

          if (event.target.id === "profileSettingsForm") {
            event.preventDefault();
            saveProfileSettings(event.target);
            return;
          }

          if (event.target.id === "chatForm") {
            event.preventDefault();
            sendChatMessage(event.target);
            return;
          }

          if (event.target.id === "editPostForm") {
            event.preventDefault();
            saveEditedPost(event.target);
            return;
          }

          if (event.target.id === "deletePostForm") {
            event.preventDefault();
            confirmDeletePost(event.target);
          }
        });

        document.addEventListener("keydown", function (event) {
          if (event.key === "Escape") {
            if (state.ui.modal) {
              closeModal();
              return;
            }

            if (state.ui.notificationsOpen) {
              state.ui.notificationsOpen = false;
              render();
            }
          }
        });
      }

      function deepClone(value) {
        return JSON.parse(JSON.stringify(value));
      }

      function normalizeState(saved) {
        const next = deepClone(defaultState);
        if (!saved || typeof saved !== "object") {
          return next;
        }

        next.ui = Object.assign({}, next.ui, saved.ui || {});
        next.currentUser = Object.assign({}, next.currentUser, saved.currentUser || {});
        next.currentUser.visibility = Object.assign(
          {},
          next.currentUser.visibility,
          (saved.currentUser || {}).visibility || {}
        );
        next.ui.chatOpen = saved.ui && typeof saved.ui.chatOpen === "boolean" ? saved.ui.chatOpen : next.ui.chatOpen;
        next.ui.activeChatPersonId = saved.ui && saved.ui.activeChatPersonId ? saved.ui.activeChatPersonId : next.ui.activeChatPersonId;
        next.stories = Array.isArray(saved.stories) ? saved.stories : next.stories;
        next.reels = Array.isArray(saved.reels) ? saved.reels : next.reels;
        next.posts = Array.isArray(saved.posts) ? saved.posts : next.posts;
        next.products = Array.isArray(saved.products) ? saved.products : next.products;
        next.suggestions = Array.isArray(saved.suggestions) ? saved.suggestions : next.suggestions;
        next.notifications = Array.isArray(saved.notifications) ? saved.notifications : next.notifications;
        next.chats = Array.isArray(saved.chats) ? saved.chats : next.chats;
        return next;
      }

      function applyTheme() {
        document.body.setAttribute("data-theme", state.ui.theme === "blackout" ? "blackout" : "light");
      }

      function loadState() {
        try {
          const raw = window.localStorage.getItem(STORAGE_KEY);
          if (!raw) {
            return deepClone(defaultState);
          }
          return normalizeState(JSON.parse(raw));
        } catch (error) {
          return deepClone(defaultState);
        }
      }

      function saveState() {
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (error) {
          /* localStorage can fail in some file contexts; ignore */
        }
      }

      function nowLabel() {
        return new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit"
        });
      }

      function createId(prefix) {
        return prefix + "-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
      }

      function normalizeText(value) {
        return String(value || "")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
      }

      function matchesQuery(query, values) {
        if (!query) {
          return true;
        }
        return values.some(function (value) {
          return normalizeText(value).includes(query);
        });
      }

      function escapeHtml(value) {
        return String(value)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;");
      }

      function verifiedBadgeHtml(isVerified) {
        return isVerified
          ? '<span class="verified-badge" title="Perfil verificado">âœ“</span>'
          : "";
      }

      function profileTriggerHtml(personId, name, verified) {
        return (
          '<span class="profile-link-button" role="button" tabindex="0" data-action="open-person-profile" data-person-id="' + escapeHtml(personId || "") + '">' +
            '<span class="name-with-badge">' + escapeHtml(name) + verifiedBadgeHtml(verified) + "</span>" +
          "</span>"
        );
      }

      function reactionMeta(key) {
        return reactionOptions.find(function (option) {
          return option.key === key;
        }) || reactionOptions[0];
      }

      function closeReactionMenus() {
        state.posts.forEach(function (post) {
          post.showReactions = false;
        });
      }

      function formatMoney(value) {
        return "R$ " + Number(value || 0).toLocaleString("pt-BR");
      }

      function formatBirthday(value) {
        if (!value) {
          return "";
        }
        const parsed = new Date(value + "T00:00:00");
        if (Number.isNaN(parsed.getTime())) {
          return value;
        }
        return parsed.toLocaleDateString("pt-BR");
      }

      function compactMeta(parts) {
        return parts.filter(Boolean).join(" â€¢ ");
      }

      function unreadCount() {
        return state.notifications.filter(function (item) {
          return item.unread;
        }).length;
      }

      function unreadChatCount() {
        return state.chats.reduce(function (total, chat) {
          return total + (chat.messages || []).filter(function (message) {
            return message.senderId !== state.currentUser.id && !message.read;
          }).length;
        }, 0);
      }

      function adminAction(action) {
        if (action === "seed-notification") {
          addNotification("Alerta administrativo gerado manualmente no painel.");
          render();
          showToast("Notificacao administrativa criada.");
          return;
        }

        if (action === "clear-notifications") {
          state.notifications = [];
          render();
          showToast("Notificacoes limpas.");
          return;
        }

        if (action === "mark-chats-read") {
          state.chats.forEach(function (chat) {
            (chat.messages || []).forEach(function (message) {
              if (message.senderId !== state.currentUser.id) {
                message.read = true;
              }
            });
          });
          render();
          showToast("Todas as conversas foram marcadas como lidas.");
          return;
        }

        if (action === "seed-chat") {
          const target = state.suggestions[0] && state.suggestions[0].personId ? state.suggestions[0].personId : "carla-nunes";
          const chat = ensureChat(target);
          chat.messages.push(autoReplyForPerson(target));
          render();
          showToast("Mensagem simulada adicionada ao chat.");
          return;
        }

        if (action === "seed-post") {
          state.posts.unshift({
            id: createId("post"),
            authorId: "maria-souza",
            name: "Maria Souza",
            avatar: "https://i.pravatar.cc/150?img=5",
            image: fallbackImages[Math.floor(Math.random() * fallbackImages.length)],
            content: "Post administrativo de teste para validar o feed e os contadores.",
            likes: Math.floor(Math.random() * 20),
            shares: Math.floor(Math.random() * 5),
            verified: true,
            liked: false,
            reaction: null,
            showReactions: false,
            showComments: false,
            createdAt: "Hoje, " + nowLabel(),
            comments: []
          });
          addNotification("Post de teste inserido pelo painel admin.");
          render();
          showToast("Post de teste adicionado.");
          return;
        }

        if (action === "seed-product") {
          state.products.unshift({
            id: createId("product"),
            ownerId: "carla-nunes",
            owner: "Carla Nunes",
            name: "Camera mirrorless",
            price: 3400,
            image: fallbackImage("camera-mirrorless"),
            location: "Recife",
            description: "Anuncio administrativo para testar marketplace e perfis de vendedor."
          });
          addNotification("Produto de teste criado pelo painel admin.");
          render();
          showToast("Produto de teste adicionado.");
          return;
        }

        if (action === "seed-story") {
          state.stories.unshift({
            id: createId("story"),
            personId: "carla-nunes",
            name: "Carla",
            avatar: "https://i.pravatar.cc/150?img=21",
            status: "Story administrativo criado para testar a fileira de stories.",
            verified: true
          });
          addNotification("Story de teste publicado pelo painel admin.");
          render();
          showToast("Story de teste adicionado.");
          return;
        }

        if (action === "remove-latest-post") {
          if (!state.posts.length) {
            showToast("Nao ha posts para remover.");
            return;
          }
          state.posts.shift();
          render();
          showToast("Post mais recente removido.");
          return;
        }

        if (action === "remove-latest-product") {
          if (!state.products.length) {
            showToast("Nao ha produtos para remover.");
            return;
          }
          state.products.shift();
          render();
          showToast("Produto mais recente removido.");
          return;
        }

        if (action === "toggle-current-user-verified") {
          state.currentUser.verified = !state.currentUser.verified;
          syncCurrentUserReferences(state.currentUser);
          render();
          showToast(state.currentUser.verified ? "Selo do admin ativado." : "Selo do admin removido.");
          return;
        }

        if (action === "reset-demo") {
          state = deepClone(defaultState);
          state.ui.modal = { type: "admin" };
          render();
          showToast("Demo restaurada para o estado inicial.");
          return;
        }
      }

      function likedCount() {
        return state.posts.filter(function (post) {
          return post.liked;
        }).length;
      }

      function totalCommentsCount() {
        return state.posts.reduce(function (total, post) {
          return total + (post.comments || []).length;
        }, 0);
      }

      function currentUserCommentCount() {
        return state.posts.reduce(function (total, post) {
          return total + (post.comments || []).filter(function (comment) {
            return comment.author === state.currentUser.name;
          }).length;
        }, 0);
      }

      function addedFriendsCount() {
        return state.suggestions.filter(function (friend) {
          return friend.added;
        }).length;
      }

      function viewedStoriesCount() {
        return state.stories.filter(function (story) {
          return story.viewed;
        }).length;
      }

      function getChatByPersonId(personId) {
        return state.chats.find(function (chat) {
          return chat.personId === personId;
        }) || null;
      }

      function ensureChat(personId) {
        if (!personId) {
          return null;
        }

        let chat = getChatByPersonId(personId);
        if (!chat) {
          const person = getPersonProfile(personId);
          chat = {
            id: createId("chat"),
            personId: personId,
            messages: [
              {
                id: createId("msg"),
                senderId: personId,
                text: "Oi, podemos conversar por aqui.",
                time: nowLabel(),
                read: false
              }
            ]
          };
          state.chats.unshift(chat);
          addNotification("Nova conversa iniciada com " + (person ? person.name : "essa pessoa") + ".");
        }
        return chat;
      }

      function markChatAsRead(personId) {
        const chat = getChatByPersonId(personId);
        if (!chat) {
          return;
        }
        (chat.messages || []).forEach(function (message) {
          if (message.senderId !== state.currentUser.id) {
            message.read = true;
          }
        });
      }

      function openChatWithPerson(personId) {
        if (!personId) {
          return;
        }
        ensureChat(personId);
        state.ui.modal = null;
        state.ui.notificationsOpen = false;
        state.ui.chatOpen = true;
        state.ui.activeChatPersonId = personId;
        markChatAsRead(personId);
        render();
        const person = getPersonProfile(personId);
        showToast("Chat com " + (person ? person.name : "essa pessoa") + " aberto.");
      }

      function autoReplyForPerson(personId) {
        const person = getPersonProfile(personId);
        const samples = [
          "Perfeito, te respondo com mais detalhes daqui a pouco.",
          "Gostei da ideia. Vamos combinar melhor isso.",
          "Vi sua mensagem agora e curti o papo.",
          "Fechado. Depois seguimos por aqui."
        ];
        return {
          id: createId("msg"),
          senderId: personId,
          text: (person ? person.name.split(" ")[0] + ": " : "") + samples[Math.floor(Math.random() * samples.length)],
          time: nowLabel(),
          read: false
        };
      }

      function closeChatEmojiPicker() {
        const chatForm = document.getElementById("chatForm");
        if (chatForm) {
          chatForm.setAttribute("data-emoji-open", "false");
        }
      }

      function toggleChatEmojiPicker() {
        const chatForm = document.getElementById("chatForm");
        if (!chatForm) {
          return;
        }

        const isOpen = chatForm.getAttribute("data-emoji-open") === "true";
        chatForm.setAttribute("data-emoji-open", isOpen ? "false" : "true");
      }

      function insertChatEmoji(emoji) {
        const chatForm = document.getElementById("chatForm");
        if (!chatForm || !emoji) {
          return;
        }

        const input = chatForm.querySelector("input[name='chat-message']");
        if (!input) {
          return;
        }

        const start = typeof input.selectionStart === "number" ? input.selectionStart : input.value.length;
        const end = typeof input.selectionEnd === "number" ? input.selectionEnd : input.value.length;
        input.focus();

        if (typeof input.setRangeText === "function") {
          input.setRangeText(emoji + " ", start, end, "end");
        } else {
          input.value = input.value.slice(0, start) + emoji + " " + input.value.slice(end);
        }

        closeChatEmojiPicker();
      }

      function sendChatMessage(form) {
        const input = form.querySelector("input[name='chat-message']");
        const text = input ? input.value.trim() : "";
        const personId = state.ui.activeChatPersonId;
        if (!personId || !text) {
          showToast("Escolha uma conversa e escreva uma mensagem.");
          return;
        }

        const chat = ensureChat(personId);
        if (!chat) {
          return;
        }

        chat.messages.push({
          id: createId("msg"),
          senderId: state.currentUser.id,
          text: text,
          time: nowLabel(),
          read: true
        });
        chat.messages.push(autoReplyForPerson(personId));

        const person = getPersonProfile(personId);
        addNotification("Mensagem enviada para " + (person ? person.name : "essa pessoa") + ".");
        markChatAsRead(personId);
        saveState();
        render();
      }

      function currentUserPosts() {
        return state.posts.filter(function (post) {
          return post.authorId === state.currentUser.id || (!post.authorId && post.name === state.currentUser.name);
        });
      }

      function currentUserProducts() {
        return state.products.filter(function (product) {
          return product.ownerId === state.currentUser.id || (!product.ownerId && product.owner === state.currentUser.name);
        });
      }

      function getPersonProfile(personId) {
        if (!personId) {
          return null;
        }

        if (personId === state.currentUser.id) {
          return {
            id: state.currentUser.id,
            name: state.currentUser.name,
            avatar: state.currentUser.avatar,
            verified: !!state.currentUser.verified,
            tagline: state.currentUser.tagline,
            bio: state.currentUser.bio,
            location: state.currentUser.location,
            work: state.currentUser.work,
            website: state.currentUser.website,
            coverImage: state.currentUser.coverImage,
            storyStatus: "",
            mutual: "",
            isCurrentUser: true
          };
        }

        const base = deepClone(peopleProfiles[personId] || { id: personId });
        const story = state.stories.find(function (item) {
          return item.personId === personId;
        });
        const post = state.posts.find(function (item) {
          return item.authorId === personId;
        });
        const product = state.products.find(function (item) {
          return item.ownerId === personId;
        });
        const suggestion = state.suggestions.find(function (item) {
          return item.personId === personId;
        });

        base.avatar = base.avatar || (story && story.avatar) || (post && post.avatar) || (suggestion && suggestion.avatar) || fallbackImage(personId);
        base.name = base.name || (post && post.name) || (suggestion && suggestion.name) || (story && story.name) || "Pessoa da rede";
        base.verified = typeof base.verified === "boolean" ? base.verified : !!((post && post.verified) || (story && story.verified) || (suggestion && suggestion.verified));
        base.tagline = base.tagline || (suggestion && suggestion.subtitle) || (story && story.status) || "Pessoa ativa na rede.";
        base.bio = base.bio || "Essa pessoa ainda nao adicionou uma bio detalhada.";
        base.location = base.location || (product && product.location) || "";
        base.work = base.work || "";
        base.website = base.website || "";
        base.coverImage = base.coverImage || fallbackImage(personId + "-cover");
        base.storyStatus = (story && story.status) || "";
        base.mutual = (suggestion && suggestion.subtitle) || "";
        base.isCurrentUser = false;
        return base;
      }

      function filteredData() {
        const query = normalizeText(state.ui.search.trim());
        return {
          query: query,
          stories: state.stories.filter(function (story) {
            return matchesQuery(query, [story.name, story.status]);
          }),
          reels: state.reels.filter(function (reel) {
            return matchesQuery(query, [reel.name, reel.caption, reel.audio]);
          }),
          posts: state.posts.filter(function (post) {
            const comments = (post.comments || []).map(function (comment) {
              return comment.author + " " + comment.text;
            });
            return matchesQuery(query, [post.name, post.content].concat(comments));
          }),
          products: state.products.filter(function (product) {
            return matchesQuery(query, [product.name, product.location, product.description]);
          }),
          suggestions: state.suggestions.filter(function (friend) {
            return matchesQuery(query, [friend.name, friend.subtitle]);
          })
        };
      }

      function getSearchCollections() {
        const query = normalizeText(state.ui.search.trim());
        const personMap = {};

        Object.keys(peopleProfiles).forEach(function (key) {
          personMap[key] = getPersonProfile(key);
        });

        state.suggestions.forEach(function (friend) {
          if (friend.personId) {
            personMap[friend.personId] = getPersonProfile(friend.personId);
          }
        });

        state.posts.forEach(function (post) {
          if (post.authorId) {
            personMap[post.authorId] = getPersonProfile(post.authorId);
          }
        });

        state.stories.forEach(function (story) {
          if (story.personId) {
            personMap[story.personId] = getPersonProfile(story.personId);
          }
        });

        state.reels.forEach(function (reel) {
          if (reel.personId) {
            personMap[reel.personId] = getPersonProfile(reel.personId);
          }
        });

        state.chats.forEach(function (chat) {
          if (chat.personId) {
            personMap[chat.personId] = getPersonProfile(chat.personId);
          }
        });

        const people = Object.keys(personMap)
          .map(function (key) {
            return personMap[key];
          })
          .filter(function (person) {
            return person && matchesQuery(query, [person.name, person.tagline, person.bio, person.location, person.work]);
          })
          .slice(0, 4);

        const posts = state.posts.filter(function (post) {
          const comments = (post.comments || []).map(function (comment) {
            return comment.author + " " + comment.text;
          });
          return matchesQuery(query, [post.name, post.content].concat(comments));
        }).slice(0, 4);

        const reels = state.reels.filter(function (reel) {
          return matchesQuery(query, [reel.name, reel.caption, reel.audio]);
        }).slice(0, 4);

        const products = state.products.filter(function (product) {
          return matchesQuery(query, [product.name, product.location, product.description, product.owner]);
        }).slice(0, 4);

        const chats = state.chats.filter(function (chat) {
          const person = getPersonProfile(chat.personId);
          const messageText = (chat.messages || []).map(function (message) {
            return message.text;
          });
          return matchesQuery(query, [person ? person.name : "", person ? person.tagline : ""].concat(messageText));
        }).slice(0, 4);

        return {
          people: people,
          reels: reels,
          posts: posts,
          products: products,
          chats: chats
        };
      }

      function addNotification(text) {
        state.notifications.unshift({
          id: createId("note"),
          text: text,
          time: "Hoje, " + nowLabel(),
          unread: true
        });
        state.notifications = state.notifications.slice(0, 18);
      }

      function markNotificationsAsRead() {
        state.notifications.forEach(function (item) {
          item.unread = false;
        });
      }

      function fallbackImage(seed) {
        const safeSeed = normalizeText(seed).replace(/[^a-z0-9]+/g, "-") || "novo-post";
        return "https://picsum.photos/seed/" + safeSeed + "/1200/800";
      }

      function showToast(message) {
        elements.toast.textContent = message;
        elements.toast.classList.add("is-visible");
        window.clearTimeout(toastTimer);
        toastTimer = window.setTimeout(function () {
          elements.toast.classList.remove("is-visible");
        }, 2200);
      }

      function closeModal() {
        state.ui.modal = null;
        render();
      }

      function resetComposerFields() {
        elements.composerText.value = "";
        elements.composerAttachment.value = "";
        elements.composerCheckin.value = "";
        elements.composerFeeling.value = "";
        state.ui.composerPanel = "";
        renderComposer();
      }

      function toggleComposerPanel(panel) {
        state.ui.composerPanel = state.ui.composerPanel === panel ? "" : panel;
        renderComposer();
        const focusMap = {
          files: elements.composerAttachment,
          checkin: elements.composerCheckin,
          feeling: elements.composerFeeling
        };
        const target = focusMap[state.ui.composerPanel];
        if (target) {
          window.setTimeout(function () {
            target.focus();
          }, 30);
        }
      }

      function renderComposer() {
        const activePanel = state.ui.composerPanel || "";
        elements.composerFilesButton.setAttribute("data-active", activePanel === "files" ? "true" : "false");
        elements.composerCheckinButton.setAttribute("data-active", activePanel === "checkin" ? "true" : "false");
        elements.composerFeelingButton.setAttribute("data-active", activePanel === "feeling" ? "true" : "false");
        elements.composerFilesPanel.setAttribute("data-open", activePanel === "files" ? "true" : "false");
        elements.composerCheckinPanel.setAttribute("data-open", activePanel === "checkin" ? "true" : "false");
        elements.composerFeelingPanel.setAttribute("data-open", activePanel === "feeling" ? "true" : "false");
      }

      function storyPreviewImage(story) {
        if (!story) {
          return fallbackImage("story-preview");
        }

        if (story.previewImage) {
          return story.previewImage;
        }

        const person = getPersonProfile(story.personId || "");
        return (person && person.coverImage) || fallbackImage((story.personId || story.name || "story") + "-preview");
      }

      function syncCurrentUserReferences(previousUser) {
        state.stories.forEach(function (story) {
          const belongsToCurrentUser =
            story.personId === state.currentUser.id ||
            (!story.personId && story.name === previousUser.name);

          if (belongsToCurrentUser) {
            story.personId = state.currentUser.id;
            story.name = state.currentUser.name;
            story.avatar = state.currentUser.avatar;
            story.verified = !!state.currentUser.verified;
          }
        });

        state.posts.forEach(function (post) {
          const belongsToCurrentUser =
            post.authorId === state.currentUser.id ||
            (!post.authorId && post.name === previousUser.name);

          if (belongsToCurrentUser) {
            post.authorId = state.currentUser.id;
            post.name = state.currentUser.name;
            post.avatar = state.currentUser.avatar;
            post.verified = !!state.currentUser.verified;
          }
        });

        state.products.forEach(function (product) {
          const belongsToCurrentUser =
            product.ownerId === state.currentUser.id ||
            (!product.ownerId && product.owner === previousUser.name);

          if (belongsToCurrentUser) {
            product.ownerId = state.currentUser.id;
            product.owner = state.currentUser.name;
          }
        });
      }

      function saveProfileSettings(form) {
        const previousUser = deepClone(state.currentUser);
        const previousTheme = state.ui.theme;
        const name = form.querySelector("[name='profile-name']").value.trim();
        const tagline = form.querySelector("[name='profile-tagline']").value.trim();
        const bio = form.querySelector("[name='profile-bio']").value.trim();
        const avatar = form.querySelector("[name='profile-avatar']").value.trim();
        const coverImage = form.querySelector("[name='profile-cover']").value.trim();
        const location = form.querySelector("[name='profile-location']").value.trim();
        const work = form.querySelector("[name='profile-work']").value.trim();
        const website = form.querySelector("[name='profile-website']").value.trim();
        const email = form.querySelector("[name='profile-email']").value.trim();
        const phone = form.querySelector("[name='profile-phone']").value.trim();
        const birthday = form.querySelector("[name='profile-birthday']").value.trim();
        const verified = form.querySelector("[name='profile-verified']").checked;
        const blackoutTheme = form.querySelector("[name='profile-theme-blackout']").checked;
        const showEmail = form.querySelector("[name='profile-show-email']").checked;
        const showPhone = form.querySelector("[name='profile-show-phone']").checked;
        const showBirthday = form.querySelector("[name='profile-show-birthday']").checked;

        if (!name || !tagline || !bio) {
          showToast("Preencha nome, frase principal e bio para salvar o perfil.");
          return;
        }

        state.currentUser = Object.assign({}, state.currentUser, {
          name: name,
          tagline: tagline,
          bio: bio,
          avatar: avatar || fallbackImage(name),
          coverImage: coverImage || fallbackImage(name + "-cover"),
          location: location,
          work: work,
          website: website,
          email: email,
          phone: phone,
          birthday: birthday,
          verified: verified,
          visibility: {
            email: showEmail,
            phone: showPhone,
            birthday: showBirthday
          }
        });
        state.ui.theme = blackoutTheme ? "blackout" : "light";

        syncCurrentUserReferences(previousUser);
        addNotification("Seu perfil foi atualizado com novas configuracoes.");
        if (previousTheme !== state.ui.theme) {
          addNotification(state.ui.theme === "blackout" ? "Tema blackout ativado." : "Tema claro restaurado.");
        }
        state.ui.modal = { type: "profile" };
        saveState();
        render();
        showToast(previousTheme !== state.ui.theme ? "Perfil e tema atualizados." : "Perfil atualizado com sucesso.");
      }

      function resetProfileSettings() {
        const previousUser = deepClone(state.currentUser);
        state.currentUser = deepClone(defaultState.currentUser);
        state.ui.theme = defaultState.ui.theme;
        syncCurrentUserReferences(previousUser);
        addNotification("Seu perfil voltou para a configuracao padrao.");
        state.ui.modal = { type: "profile-settings" };
        saveState();
        render();
        showToast("Configuracoes restauradas para o padrao.");
      }

      function openStory(storyId) {
        const story = state.stories.find(function (item) {
          return item.id === storyId;
        });
        if (!story) {
          return;
        }
        story.viewed = true;
        state.ui.modal = { type: "story", id: storyId };
        addNotification("Voce abriu o story de " + story.name + ".");
        saveState();
        render();
      }

      function addStory(form) {
        const status = form.querySelector("[name='story-status']").value.trim();
        const previewImage = form.querySelector("[name='story-preview-image']").value.trim();

        if (!status) {
          showToast("Escreva uma legenda curta para publicar o story.");
          return;
        }

        state.stories.unshift({
          id: createId("story"),
          personId: state.currentUser.id,
          name: state.currentUser.name,
          avatar: state.currentUser.avatar,
          status: status,
          verified: !!state.currentUser.verified,
          previewImage: previewImage || state.currentUser.coverImage || fallbackImage(state.currentUser.name + "-story"),
          viewed: false
        });

        addNotification("Seu novo story foi publicado.");
        state.ui.modal = null;
        saveState();
        render();
        showToast("Story publicado com sucesso.");
      }

      function openReelModal(reelId, silent) {
        const reel = state.reels.find(function (item) {
          return item.id === reelId;
        });
        if (!reel) {
          return;
        }

        if (!reel.watched) {
          reel.watched = true;
          reel.views += 1;
        }

        state.ui.modal = { type: "reel", id: reelId };
        if (!silent) {
          addNotification("Voce abriu o reel de " + reel.name + ".");
        }
        saveState();
        render();
      }

      function stepReelModal(direction) {
        const modal = state.ui.modal;
        if (!modal || modal.type !== "reel") {
          return;
        }

        const currentIndex = state.reels.findIndex(function (item) {
          return item.id === modal.id;
        });
        if (currentIndex === -1 || !state.reels.length) {
          return;
        }

        const nextIndex = (currentIndex + direction + state.reels.length) % state.reels.length;
        openReelModal(state.reels[nextIndex].id, true);
      }

      function toggleLike(postId) {
        const post = state.posts.find(function (item) {
          return item.id === postId;
        });
        if (!post) {
          return;
        }
        const willOpen = !post.showReactions;
        closeReactionMenus();
        post.showReactions = willOpen;
        saveState();
        render();
      }

      function selectReaction(postId, reactionKey) {
        const post = state.posts.find(function (item) {
          return item.id === postId;
        });
        if (!post) {
          return;
        }

        const previousReaction = post.reaction;
        if (previousReaction === reactionKey) {
          post.reaction = null;
          post.liked = false;
          post.likes = Math.max(0, post.likes - 1);
          addNotification("Voce removeu sua reacao do post de " + post.name + ".");
        } else {
          if (!post.reaction) {
            post.likes += 1;
          }
          post.reaction = reactionKey;
          post.liked = true;
          addNotification("Voce reagiu com " + reactionMeta(reactionKey).label.toLowerCase() + " ao post de " + post.name + ".");
        }

        closeReactionMenus();
        saveState();
        render();
      }

      function toggleComments(postId) {
        const post = state.posts.find(function (item) {
          return item.id === postId;
        });
        if (!post) {
          return;
        }
        post.showComments = !post.showComments;
        saveState();
        render();
      }

      function sharePost(postId) {
        const post = state.posts.find(function (item) {
          return item.id === postId;
        });
        if (!post) {
          return;
        }

        post.shares += 1;
        const shareText = "Confira o post de " + post.name + " em Minha Rede.";
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(shareText).catch(function () {
            return null;
          });
        }

        addNotification("Voce compartilhou um post de " + post.name + ".");
        saveState();
        render();
        showToast("Compartilhamento registrado. Texto preparado para copiar.");
      }

      function publishPost() {
        const content = elements.composerText.value.trim();
        const attachment = elements.composerAttachment.value.trim();
        const checkIn = elements.composerCheckin.value.trim();
        const feeling = elements.composerFeeling.value.trim();

        if (!content && !attachment && !checkIn && !feeling) {
          showToast("Escreva algo ou use uma das opcoes do compositor para publicar.");
          return;
        }

        state.posts.unshift({
          id: createId("post"),
          authorId: state.currentUser.id,
          name: state.currentUser.name,
          avatar: state.currentUser.avatar,
          image: "",
          attachment: attachment,
          checkIn: checkIn,
          feeling: feeling,
          content: content || "Compartilhando um novo momento por aqui.",
          likes: 0,
          shares: 0,
          verified: !!state.currentUser.verified,
          liked: false,
          reaction: null,
          showReactions: false,
          showComments: false,
          createdAt: "Hoje, " + nowLabel(),
          comments: []
        });

        addNotification("Seu novo post foi publicado no feed.");
        resetComposerFields();
        state.ui.activeTab = "home";
        saveState();
        render();
        showToast("Post publicado com sucesso.");
      }

      function saveEditedPost(form) {
        const postId = form.getAttribute("data-post-id");
        const content = form.querySelector("[name='edit-post-content']").value.trim();
        const image = form.querySelector("[name='edit-post-image']").value.trim();
        const post = state.posts.find(function (item) {
          return item.id === postId;
        });

        if (!post || post.authorId !== state.currentUser.id) {
          showToast("Voce so pode editar os seus proprios posts.");
          return;
        }

        if (!content && !image) {
          showToast("Mantenha um texto ou uma imagem no post.");
          return;
        }

        post.content = content || "Compartilhando uma atualizacao.";
        post.image = image || fallbackImage(content || post.id);
        addNotification("Seu post foi atualizado.");
        state.ui.modal = null;
        saveState();
        render();
        showToast("Post editado com sucesso.");
      }

      function confirmDeletePost(form) {
        const postId = form.getAttribute("data-post-id");
        const postIndex = state.posts.findIndex(function (item) {
          return item.id === postId;
        });

        if (postIndex === -1 || state.posts[postIndex].authorId !== state.currentUser.id) {
          showToast("Voce so pode excluir os seus proprios posts.");
          return;
        }

        const deletedPost = state.posts[postIndex];
        state.posts.splice(postIndex, 1);
        addNotification("Seu post foi excluido.");
        state.ui.modal = null;
        saveState();
        render();
        showToast('Post "' + (deletedPost.content || "sem titulo").slice(0, 24) + '" excluido.');
      }

      function addComment(form) {
        const postId = form.getAttribute("data-post-id");
        const input = form.querySelector("input[name='comment']");
        const text = input ? input.value.trim() : "";
        if (!text) {
          showToast("Digite um comentario antes de enviar.");
          return;
        }

        const post = state.posts.find(function (item) {
          return item.id === postId;
        });
        if (!post) {
          return;
        }

        post.comments.push({
          id: createId("comment"),
          author: state.currentUser.name,
          text: text
        });
        post.showComments = true;
        addNotification("Voce comentou no post de " + post.name + ".");
        saveState();
        render();
        showToast("Comentario enviado.");
      }

      function openProductModal(productId) {
        state.ui.modal = { type: "product", id: productId };
        render();
      }

      function registerProductInterest(productId) {
        const product = state.products.find(function (item) {
          return item.id === productId;
        });
        if (!product) {
          return;
        }
        product.interested = true;
        addNotification("Interesse enviado em " + product.name + ".");
        saveState();
        render();
        showToast("Interesse registrado para " + product.name + ".");
      }

      function toggleSaveProduct(productId) {
        const product = state.products.find(function (item) {
          return item.id === productId;
        });
        if (!product) {
          return;
        }
        product.saved = !product.saved;
        addNotification((product.saved ? "Voce salvou " : "Voce removeu dos salvos ") + product.name + ".");
        saveState();
        render();
        showToast(product.saved ? product.name + " foi salvo." : product.name + " saiu dos salvos.");
      }

      function resetMarketplaceFilters() {
        state.ui.marketplaceSearch = "";
        state.ui.marketplaceCategory = "all";
        state.ui.marketplaceView = "all";
        state.ui.marketplaceSort = "recent";
        state.ui.marketplaceMinPrice = "";
        state.ui.marketplaceMaxPrice = "";
        render();
        showToast("Filtros do marketplace limpos.");
      }

      function marketplaceCategoryForProduct(product) {
        const text = [product.name, product.description, product.location].join(" ").toLowerCase();
        if (text.indexOf("iphone") !== -1 || text.indexOf("celular") !== -1 || text.indexOf("setup") !== -1) {
          return "Eletronicos";
        }
        if (text.indexOf("bicicleta") !== -1 || text.indexOf("trilha") !== -1 || text.indexOf("pedal") !== -1) {
          return "Esportes";
        }
        if (text.indexOf("sofa") !== -1 || text.indexOf("casa") !== -1 || text.indexOf("tecido") !== -1) {
          return "Casa";
        }
        return "Outros";
      }

      function getMarketplacePageProducts() {
        const query = (state.ui.marketplaceSearch || "").trim().toLowerCase();
        const minPrice = Number(String(state.ui.marketplaceMinPrice || "").replace(",", "."));
        const maxPrice = Number(String(state.ui.marketplaceMaxPrice || "").replace(",", "."));
        const hasMin = Number.isFinite(minPrice) && String(state.ui.marketplaceMinPrice || "").trim() !== "";
        const hasMax = Number.isFinite(maxPrice) && String(state.ui.marketplaceMaxPrice || "").trim() !== "";

        let products = state.products.filter(function (product) {
          const matchesQuery = !query || [product.name, product.description, product.location, product.owner].join(" ").toLowerCase().indexOf(query) !== -1;
          const matchesCategory = state.ui.marketplaceCategory === "all" || marketplaceCategoryForProduct(product) === state.ui.marketplaceCategory;
          const matchesMin = !hasMin || Number(product.price) >= minPrice;
          const matchesMax = !hasMax || Number(product.price) <= maxPrice;
          const matchesView =
            state.ui.marketplaceView === "all" ||
            (state.ui.marketplaceView === "selling" && product.ownerId === state.currentUser.id) ||
            (state.ui.marketplaceView === "saved" && product.saved) ||
            (state.ui.marketplaceView === "interested" && product.interested);
          return matchesQuery && matchesCategory && matchesMin && matchesMax && matchesView;
        });

        if (state.ui.marketplaceSort === "price-asc") {
          products = products.slice().sort(function (a, b) { return Number(a.price) - Number(b.price); });
        } else if (state.ui.marketplaceSort === "price-desc") {
          products = products.slice().sort(function (a, b) { return Number(b.price) - Number(a.price); });
        } else if (state.ui.marketplaceSort === "name") {
          products = products.slice().sort(function (a, b) { return String(a.name).localeCompare(String(b.name)); });
        }

        return products;
      }

      function toggleFriend(friendId) {
        const friend = state.suggestions.find(function (item) {
          return item.id === friendId;
        });
        if (!friend) {
          return;
        }
        friend.added = !friend.added;
        addNotification(
          friend.added
            ? "Voce adicionou " + friend.name + " como contato."
            : "Voce removeu " + friend.name + " das suas conexoes."
        );
        saveState();
        render();
        showToast(friend.added ? friend.name + " foi adicionado." : friend.name + " foi removido.");
      }

      function addProduct(form) {
        const name = form.querySelector("[name='product-name']").value.trim();
        const price = form.querySelector("[name='product-price']").value.trim();
        const image = form.querySelector("[name='product-image']").value.trim();
        const location = form.querySelector("[name='product-location']").value.trim();
        const description = form.querySelector("[name='product-description']").value.trim();
        const parsedPrice = Number(String(price).replace(",", "."));

        if (!name || !price || !location || !description) {
          showToast("Preencha nome, preco, cidade e descricao do produto.");
          return;
        }

        if (!Number.isFinite(parsedPrice) || parsedPrice < 0) {
          showToast("Digite um preco valido para o produto.");
          return;
        }

        state.products.unshift({
          id: createId("product"),
          ownerId: state.currentUser.id,
          name: name,
          price: parsedPrice,
          image: image || fallbackImage(name),
          location: location,
          description: description,
          owner: state.currentUser.name
        });

        addNotification("Seu produto " + name + " entrou no marketplace.");
        state.ui.modal = null;
        saveState();
        render();
        showToast("Produto publicado com sucesso.");
      }

      function render() {
        saveState();
        applyTheme();
        renderHeader();
        renderPageMode();
        renderComposer();
        renderSearchResults();
        renderStories();
        renderReels();
        renderMarketplacePage();
        renderPosts();
        renderProducts();
        renderFriends();
        renderProfile();
        renderTrendingTopics();
        renderNotifications();
        renderChatDrawer();
        renderModal();
      }

      function renderPageMode() {
        const reelsPage = state.ui.activeTab === "reels-page";
        const marketplacePage = state.ui.activeTab === "marketplace-page";
        const specialPage = reelsPage || marketplacePage;
        elements.mainLayout.classList.toggle("reels-page", specialPage);
        elements.composerCard.classList.toggle("hidden", specialPage);
        elements.storiesSection.classList.toggle("hidden", specialPage);
        elements.feedHeading.classList.toggle("hidden", specialPage);
        elements.postsList.classList.toggle("hidden", specialPage);
        elements.emptyState.classList.toggle("hidden", specialPage || state.posts.length !== 0);
        elements.sidebarColumn.classList.toggle("hidden", specialPage);
        elements.reelsSection.classList.toggle("reels-page-mode", reelsPage);
        elements.reelsSection.classList.toggle("hidden", marketplacePage);
        elements.marketplacePageSection.classList.toggle("hidden", !marketplacePage);
      }

      function renderHeader() {
        const currentUser = state.currentUser;
        const unread = unreadCount();
        const unreadChat = unreadChatCount();

        elements.searchInput.value = state.ui.search;
        elements.currentUserAvatar.src = currentUser.avatar;
        elements.currentUserName.innerHTML =
          '<button class="profile-link-button" data-action="open-profile" type="button"><span class="name-with-badge">' + escapeHtml(currentUser.name) + verifiedBadgeHtml(currentUser.verified) + "</span></button>";
        elements.currentUserTagline.textContent = currentUser.tagline;

        elements.alertBadge.textContent = String(unread);
        elements.alertBadge.classList.toggle("hidden", unread === 0);
        elements.chatBadge.textContent = String(unreadChat);
        elements.chatBadge.classList.toggle("hidden", unreadChat === 0);

        document.querySelectorAll(".nav-pill").forEach(function (button) {
          const action = button.getAttribute("data-action");
          const active =
            (action === "go-home" && state.ui.activeTab === "home") ||
            (action === "open-friends" && state.ui.activeTab === "friends") ||
            (action === "open-reels" && (state.ui.activeTab === "reels" || state.ui.activeTab === "reels-page")) ||
            (action === "open-marketplace" && (state.ui.activeTab === "marketplace" || state.ui.activeTab === "marketplace-page")) ||
            (action === "focus-composer" && state.ui.activeTab === "create") ||
            (action === "open-profile" && state.ui.activeTab === "profile") ||
            (action === "open-admin" && state.ui.modal && state.ui.modal.type === "admin") ||
            (action === "toggle-chat" && state.ui.chatOpen) ||
            (action === "toggle-notifications" && state.ui.notificationsOpen);
          button.setAttribute("data-active", active ? "true" : "false");
        });

        elements.composerCard.classList.toggle("is-focused", state.ui.activeTab === "create");
      }

      function renderSearchResults() {
        const queryLabel = state.ui.search.trim();
        if (!queryLabel) {
          elements.searchResultsSection.classList.add("hidden");
          elements.searchResultsGrid.innerHTML = "";
          return;
        }

        const results = getSearchCollections();
        const total =
          results.people.length +
          results.reels.length +
          results.posts.length +
          results.products.length +
          results.chats.length;

        elements.searchResultsSection.classList.remove("hidden");
        elements.searchResultsSummary.textContent =
          total > 0
            ? total + ' resultado' + (total === 1 ? '' : 's') + ' para "' + queryLabel + '".'
            : 'Nenhum resultado direto para "' + queryLabel + '".';

        elements.searchResultsGrid.innerHTML = [
          {
            title: "Pessoas",
            items: results.people.length
              ? results.people.map(function (person) {
                  return (
                    '<button class="search-result-item" data-action="open-person-profile" data-person-id="' + escapeHtml(person.id) + '">' +
                      '<div class="search-result-top">' +
                        '<img class="search-result-avatar" src="' + escapeHtml(person.avatar) + '" alt="' + escapeHtml(person.name) + '" />' +
                        "<div><strong><span class=\"name-with-badge\">" + escapeHtml(person.name) + verifiedBadgeHtml(person.verified) + "</span></strong><p>" + escapeHtml(person.tagline || "Perfil da rede") + "</p></div>" +
                      "</div>" +
                    "</button>"
                  );
                }).join("")
              : '<div class="empty-card">Nenhuma pessoa encontrada.</div>'
          },
          {
            title: "Reels",
            items: results.reels.length
              ? results.reels.map(function (reel) {
                  return (
                    '<button class="search-result-item" data-action="open-reel" data-reel-id="' + escapeHtml(reel.id) + '">' +
                      '<strong>' + escapeHtml(reel.name) + " - Reel</strong>" +
                      "<p>" + escapeHtml(reel.caption) + "</p>" +
                    "</button>"
                  );
                }).join("")
              : '<div class="empty-card">Nenhum reel encontrado.</div>'
          },
          {
            title: "Posts",
            items: results.posts.length
              ? results.posts.map(function (post) {
                  return (
                    '<button class="search-result-item" data-action="open-post-result" data-post-id="' + escapeHtml(post.id) + '">' +
                      '<strong>' + escapeHtml(post.name) + "</strong>" +
                      "<p>" + escapeHtml(post.content) + "</p>" +
                    "</button>"
                  );
                }).join("")
              : '<div class="empty-card">Nenhum post encontrado.</div>'
          },
          {
            title: "Produtos",
            items: results.products.length
              ? results.products.map(function (product) {
                  return (
                    '<button class="search-result-item" data-action="open-product" data-product-id="' + escapeHtml(product.id) + '">' +
                      "<strong>" + escapeHtml(product.name) + " - " + formatMoney(product.price) + "</strong>" +
                      "<p>" + escapeHtml(product.location) + " - " + escapeHtml(product.description) + "</p>" +
                    "</button>"
                  );
                }).join("")
              : '<div class="empty-card">Nenhum produto encontrado.</div>'
          },
          {
            title: "Conversas",
            items: results.chats.length
              ? results.chats.map(function (chat) {
                  const person = getPersonProfile(chat.personId);
                  const lastMessage = (chat.messages || [])[chat.messages.length - 1];
                  return (
                    '<button class="search-result-item" data-action="open-chat" data-person-id="' + escapeHtml(chat.personId) + '">' +
                      '<div class="search-result-top">' +
                        '<img class="search-result-avatar" src="' + escapeHtml(person ? person.avatar : fallbackImage(chat.personId)) + '" alt="' + escapeHtml(person ? person.name : "Pessoa") + '" />' +
                        "<div><strong>" + escapeHtml(person ? person.name : "Pessoa") + "</strong><p>" + escapeHtml(lastMessage ? lastMessage.text : "Sem mensagens") + "</p></div>" +
                      "</div>" +
                    "</button>"
                  );
                }).join("")
              : '<div class="empty-card">Nenhuma conversa encontrada.</div>'
          }
        ].map(function (group) {
          return (
            '<section class="search-group">' +
              "<h4>" + group.title + "</h4>" +
              '<div class="search-list">' + group.items + "</div>" +
            "</section>"
          );
        }).join("");
      }

      function renderStories() {
        const data = filteredData();
        elements.storiesSummary.textContent =
          data.stories.length + " story" + (data.stories.length === 1 ? "" : "s") + " disponiveis.";
        elements.storyChip.textContent =
          viewedStoriesCount() > 0 ? viewedStoriesCount() + " vistos" : "Toque para abrir";

        if (!data.stories.length) {
          elements.storiesList.innerHTML =
            '<button class="story story-create" data-action="open-create-story">' +
              '<div class="story-cover">' +
                '<img class="story-create-photo" src="' + escapeHtml(state.currentUser.avatar) + '" alt="' + escapeHtml(state.currentUser.name) + '" />' +
                '<span class="story-create-badge">+</span>' +
              "</div>" +
              '<div class="story-name">Criar story</div>' +
              '<div class="story-status-preview">Publique um destaque rapido com foto e frase curta.</div>' +
              '<div class="story-meta">Seu atalho</div>' +
            "</button>";
          return;
        }

        elements.storiesList.innerHTML =
          '<button class="story story-create" data-action="open-create-story">' +
            '<div class="story-cover">' +
              '<img class="story-create-photo" src="' + escapeHtml(state.currentUser.avatar) + '" alt="' + escapeHtml(state.currentUser.name) + '" />' +
              '<span class="story-create-badge">+</span>' +
            "</div>" +
            '<div class="story-name">Criar story</div>' +
            '<div class="story-status-preview">Publique um destaque rapido com foto e frase curta.</div>' +
            '<div class="story-meta">Seu atalho</div>' +
          "</button>" +
          data.stories
          .map(function (story) {
            const previewImage = storyPreviewImage(story);
            return (
              '<button class="story" data-action="open-story" data-story-id="' + escapeHtml(story.id) + '" data-viewed="' + (story.viewed ? "true" : "false") + '">' +
                '<div class="story-cover" style="--story-image:url(' + escapeHtml(previewImage) + ')">' +
                  '<div class="story-ring">' +
                    '<img src="' + escapeHtml(story.avatar) + '" alt="' + escapeHtml(story.name) + '" />' +
                  "</div>" +
                "</div>" +
                '<div class="story-name"><span class="name-with-badge">' + escapeHtml(story.name) + verifiedBadgeHtml(story.verified) + "</span></div>" +
                '<div class="story-status-preview">' + escapeHtml(story.status || "Veja a previa desse story.") + "</div>" +
                '<div class="story-meta">' + (story.viewed ? "Visto" : "Novo") + "</div>" +
              "</button>"
            );
          })
          .join("");
      }

      function renderReels() {
        const data = filteredData();
        const watched = state.reels.filter(function (reel) {
          return reel.watched;
        }).length;
        const reelsPage = state.ui.activeTab === "reels-page";

        elements.reelsSummary.textContent =
          reelsPage
            ? data.reels.length + " reel" + (data.reels.length === 1 ? "" : "s") + " para explorar nesta pagina."
            : data.reels.length + " reel" + (data.reels.length === 1 ? "" : "s") + " em destaque.";
        elements.reelsChip.textContent = reelsPage ? "Pagina de reels" : (watched > 0 ? watched + " vistos" : "Abrir em destaque");
        elements.reelsChip.setAttribute("data-active", watched > 0 ? "true" : "false");

        if (!data.reels.length) {
          elements.reelsList.innerHTML =
            '<div class="empty-card" style="width:100%">Nenhum reel combina com a sua busca.</div>';
          return;
        }

        elements.reelsList.innerHTML = data.reels
          .map(function (reel) {
            return (
              '<button class="reel-card" data-action="open-reel" data-reel-id="' + escapeHtml(reel.id) + '" style="--reel-image:url(' + escapeHtml(reel.coverImage || fallbackImage(reel.id)) + ')">' +
                '<div class="reel-inner">' +
                  '<div class="reel-top">' +
                    '<div class="reel-author">' +
                      '<img class="avatar" src="' + escapeHtml(reel.avatar || fallbackImage(reel.personId || reel.id)) + '" alt="' + escapeHtml(reel.name) + '" />' +
                      '<div>' +
                        '<strong><span class="name-with-badge">' + escapeHtml(reel.name) + verifiedBadgeHtml(reel.verified) + "</span></strong>" +
                        '<div class="small-copy">' + escapeHtml(reel.duration || "0:15") + "</div>" +
                      "</div>" +
                    "</div>" +
                    '<span class="reel-badge">' + (reel.watched ? "Visto" : "Reel") + "</span>" +
                  "</div>" +
                  '<div class="reel-copy">' +
                    "<p>" + escapeHtml(reel.caption) + "</p>" +
                    '<div class="reel-meta">' +
                      "<span>" + escapeHtml(reel.audio || "Audio em alta") + "</span>" +
                      "<span>" + reel.likes + " curtidas</span>" +
                      "<span>" + reel.views + " views</span>" +
                    "</div>" +
                  "</div>" +
                "</div>" +
              "</button>"
            );
          })
          .join("");
      }

      function renderMarketplacePage() {
        const isMarketplacePage = state.ui.activeTab === "marketplace-page";
        if (!isMarketplacePage) {
          elements.marketplacePageSection.innerHTML = "";
          return;
        }

        const allProducts = state.products.slice();
        const products = getMarketplacePageProducts();
        const sellingCount = allProducts.filter(function (product) {
          return product.ownerId === state.currentUser.id;
        }).length;
        const savedCount = allProducts.filter(function (product) {
          return !!product.saved;
        }).length;
        const interestedCount = allProducts.filter(function (product) {
          return !!product.interested;
        }).length;
        const categories = ["all", "Eletronicos", "Esportes", "Casa", "Outros"];

        const productsHtml = products.length
          ? products
              .map(function (product) {
                const category = marketplaceCategoryForProduct(product);
                return (
                  '<article class="marketplace-page-card">' +
                    '<img src="' + escapeHtml(product.image) + '" alt="' + escapeHtml(product.name) + '" />' +
                    '<div class="marketplace-page-card-head">' +
                      "<div>" +
                        "<h5>" + escapeHtml(product.name) + "</h5>" +
                        '<div class="product-price">' + formatMoney(product.price) + "</div>" +
                      "</div>" +
                      '<span class="marketplace-page-badge">' + escapeHtml(category) + "</span>" +
                    "</div>" +
                    '<div class="product-meta">' + escapeHtml(product.location) + " - " + escapeHtml(product.description) + "</div>" +
                    '<div class="small-copy">Vendido por ' + escapeHtml(product.owner || "Usuario") + "</div>" +
                    '<div class="marketplace-page-actions">' +
                      '<button class="button-soft" data-action="open-product" data-product-id="' + escapeHtml(product.id) + '">Ver detalhes</button>' +
                      '<button class="button-soft" data-action="open-person-profile" data-person-id="' + escapeHtml(product.ownerId || "") + '">Ver vendedor</button>' +
                    "</div>" +
                    '<div class="marketplace-page-subactions">' +
                      '<button class="' + (product.interested ? "button-primary" : "button-outline") + '" data-action="interest-product" data-product-id="' + escapeHtml(product.id) + '">' + (product.interested ? "Interesse enviado" : "Tenho interesse") + "</button>" +
                      '<button class="' + (product.saved ? "button-primary" : "button-outline") + '" data-action="toggle-save-product" data-product-id="' + escapeHtml(product.id) + '">' + (product.saved ? "Salvo" : "Salvar") + "</button>" +
                    "</div>" +
                  "</article>"
                );
              })
              .join("")
          : '<div class="marketplace-empty"><strong>Nenhum anuncio encontrado.</strong><p>Ajuste busca, categoria ou faixa de preco para explorar mais itens.</p></div>';

        elements.marketplacePageSection.innerHTML =
          '<div class="card-pad">' +
            '<div class="marketplace-page-shell">' +
              '<section class="marketplace-page-hero">' +
                '<div>' +
                  '<h3>Marketplace completo</h3>' +
                  '<p>Explore anuncios, filtre por categoria, acompanhe seus itens salvos e publique produtos como em uma vitrine social no estilo Facebook.</p>' +
                  '<div class="marketplace-highlight-row">' +
                    '<span class="marketplace-highlight">Compra local</span>' +
                    '<span class="marketplace-highlight">Negociacao rapida</span>' +
                    '<span class="marketplace-highlight">Perfis de vendedor</span>' +
                  "</div>" +
                "</div>" +
                '<div class="marketplace-hero-stats">' +
                  '<div class="marketplace-hero-stat"><strong>' + allProducts.length + '</strong><span class="small-copy">anuncios ativos</span></div>' +
                  '<div class="marketplace-hero-stat"><strong>' + sellingCount + '</strong><span class="small-copy">itens seus</span></div>' +
                  '<div class="marketplace-hero-stat"><strong>' + savedCount + '</strong><span class="small-copy">salvos</span></div>' +
                  '<div class="marketplace-hero-stat"><strong>' + interestedCount + '</strong><span class="small-copy">interesses enviados</span></div>' +
                "</div>" +
              "</section>" +
              '<section class="marketplace-page-layout">' +
                '<aside class="marketplace-sidebar-panel">' +
                  '<h4>Filtros e atalhos</h4>' +
                  '<div class="marketplace-filter-group">' +
                    '<div class="marketplace-filter-label">Ver pagina</div>' +
                    '<div class="marketplace-chip-row">' +
                      ['all','selling','saved','interested'].map(function (view) {
                        const labels = { all: "Para voce", selling: "Vendendo", saved: "Salvos", interested: "Interesses" };
                        return '<button class="marketplace-chip" data-action="set-marketplace-view" data-marketplace-view="' + view + '" data-active="' + (state.ui.marketplaceView === view ? "true" : "false") + '">' + labels[view] + "</button>";
                      }).join("") +
                    "</div>" +
                  "</div>" +
                  '<div class="marketplace-filter-group">' +
                    '<div class="marketplace-filter-label">Categoria</div>' +
                    '<div class="marketplace-chip-row">' +
                      categories.map(function (category) {
                        return '<button class="marketplace-chip" data-action="set-marketplace-category" data-marketplace-category="' + escapeHtml(category) + '" data-active="' + (state.ui.marketplaceCategory === category ? "true" : "false") + '">' + escapeHtml(category === "all" ? "Todas" : category) + "</button>";
                      }).join("") +
                    "</div>" +
                  "</div>" +
                  '<div class="marketplace-filter-group">' +
                    '<div class="marketplace-filter-label">Faixa de preco</div>' +
                    '<div class="marketplace-filter-grid">' +
                      '<input id="marketplaceMinPrice" class="inline-input" type="text" inputmode="decimal" placeholder="Minimo" value="' + escapeHtml(state.ui.marketplaceMinPrice || "") + '" />' +
                      '<input id="marketplaceMaxPrice" class="inline-input" type="text" inputmode="decimal" placeholder="Maximo" value="' + escapeHtml(state.ui.marketplaceMaxPrice || "") + '" />' +
                    "</div>" +
                  "</div>" +
                  '<div class="marketplace-filter-group">' +
                    '<button class="button-primary" data-action="open-sell-modal">Vender novo item</button>' +
                    '<button class="button-outline" data-action="reset-marketplace-filters">Limpar filtros</button>' +
                  "</div>" +
                  '<div class="marketplace-sidebar-meta">' +
                    '<div class="detail-item"><div><strong>Localizacao foco</strong><span>Produtos da sua rede e das cidades ja ativas na demo.</span></div><span>Brasil</span></div>' +
                    '<div class="detail-item"><div><strong>Resumo rapido</strong><span>Use salvos e interesses para montar um fluxo mais parecido com Facebook Marketplace.</span></div><span>' + products.length + ' visiveis</span></div>' +
                  "</div>" +
                "</aside>" +
                '<section class="marketplace-main-panel">' +
                  '<div class="marketplace-section-row">' +
                    '<div><h4>Explorar anuncios</h4><div class="small-copy">' + products.length + ' produto' + (products.length === 1 ? '' : 's') + ' combinando com os filtros atuais.</div></div>' +
                    '<span class="chip" data-active="true">Marketplace</span>' +
                  "</div>" +
                  '<div class="marketplace-toolbar">' +
                    '<input id="marketplaceSearchInput" class="inline-input" type="text" placeholder="Buscar produto, cidade ou vendedor..." value="' + escapeHtml(state.ui.marketplaceSearch || "") + '" />' +
                    '<select id="marketplaceSortSelect">' +
                      '<option value="recent"' + (state.ui.marketplaceSort === "recent" ? " selected" : "") + '>Mais recentes</option>' +
                      '<option value="price-asc"' + (state.ui.marketplaceSort === "price-asc" ? " selected" : "") + '>Menor preco</option>' +
                      '<option value="price-desc"' + (state.ui.marketplaceSort === "price-desc" ? " selected" : "") + '>Maior preco</option>' +
                      '<option value="name"' + (state.ui.marketplaceSort === "name" ? " selected" : "") + '>Nome A-Z</option>' +
                    "</select>" +
                  "</div>" +
                  '<div class="marketplace-grid">' + productsHtml + "</div>" +
                "</section>" +
              "</section>" +
            "</div>" +
          "</div>";
      }

      function renderPosts() {
        const data = filteredData();
        const queryLabel = state.ui.search.trim();
        const activeTitles = {
          home: "Feed principal",
          friends: "Conexoes e conversas",
          create: "Seu proximo post",
          profile: "Atividade recente"
        };

        elements.feedTitle.textContent = activeTitles[state.ui.activeTab] || "Feed principal";
        elements.feedSummary.textContent = queryLabel
          ? "Buscando por \"" + queryLabel + "\" em posts, reels, pessoas, comentarios e produtos."
          : data.posts.length + " post" + (data.posts.length === 1 ? "" : "s") + " prontos para explorar.";

        elements.emptyState.classList.toggle("hidden", data.posts.length !== 0);

        if (!data.posts.length) {
          elements.postsList.innerHTML = "";
          return;
        }

        elements.postsList.innerHTML = data.posts
          .map(function (post) {
            const commentsHtml = (post.comments || [])
              .map(function (comment) {
                return (
                  '<div class="comment-item">' +
                    "<strong>" + escapeHtml(comment.author) + ":</strong>" +
                    "<span>" + escapeHtml(comment.text) + "</span>" +
                  "</div>"
                );
              })
              .join("");
            const activeReaction = post.reaction ? reactionMeta(post.reaction) : null;
            const tags = [
              post.attachment ? "Arquivo: " + post.attachment : "",
              post.checkIn ? "Check-in: " + post.checkIn : "",
              post.feeling ? "Sentindo-se: " + post.feeling : ""
            ].filter(Boolean);
            const tagsHtml = tags.length
              ? '<div class="post-tags">' + tags.map(function (tag) {
                  return '<span class="post-tag">' + escapeHtml(tag) + "</span>";
                }).join("") + "</div>"
              : "";
            const reactionBarHtml = reactionOptions
              .map(function (option) {
                return (
                  '<button class="reaction-option" data-action="select-reaction" data-post-id="' + escapeHtml(post.id) + '" data-reaction="' + escapeHtml(option.key) + '" data-active="' + (post.reaction === option.key ? "true" : "false") + '" title="' + escapeHtml(option.label) + '">' +
                    option.emoji +
                  "</button>"
                );
              })
              .join("");

            return (
              '<article id="post-card-' + escapeHtml(post.id) + '" class="card post-card">' +
                '<div class="post-head">' +
                  '<div class="post-author">' +
                    '<img class="avatar" src="' + escapeHtml(post.avatar) + '" alt="' + escapeHtml(post.name) + '" />' +
                    "<div>" +
                      '<strong><span class="name-with-badge">' + escapeHtml(post.name) + verifiedBadgeHtml(post.verified) + "</span></strong>" +
                      '<span class="small-copy">' + escapeHtml(post.createdAt) + "</span>" +
                    "</div>" +
                  "</div>" +
                  '<div class="post-time">' + escapeHtml(post.createdAt) + "</div>" +
                "</div>" +
                (post.image ? '<img class="post-image" src="' + escapeHtml(post.image) + '" alt="' + escapeHtml(post.content || post.name) + '" />' : "") +
                '<div class="post-body">' +
                  tagsHtml +
                  '<p class="post-content">' + escapeHtml(post.content) + "</p>" +
                  '<div class="post-stats">' +
                    "<span>" + post.likes + " curtidas</span>" +
                    "<span>" + (post.comments || []).length + " comentarios</span>" +
                    "<span>" + post.shares + " compartilhamentos</span>" +
                  "</div>" +
                  (activeReaction ? '<div class="reaction-note">Sua reacao: ' + activeReaction.emoji + " " + escapeHtml(activeReaction.label) + "</div>" : "") +
                  '<div class="post-actions">' +
                    '<div class="reaction-wrap">' +
                      (post.showReactions ? '<div class="reaction-bar">' + reactionBarHtml + "</div>" : "") +
                      '<button class="action-button" data-action="like-post" data-post-id="' + escapeHtml(post.id) + '" data-active="' + (post.liked ? "true" : "false") + '">' +
                        "<span>" + (activeReaction ? activeReaction.emoji + " " + escapeHtml(activeReaction.label) : "Curtir") + "</span>" +
                      "</button>" +
                    "</div>" +
                    (post.authorId === state.currentUser.id
                      ? (
                        '<button class="action-button" data-action="edit-post" data-post-id="' + escapeHtml(post.id) + '"><span>Editar</span></button>' +
                        '<button class="action-button" data-action="delete-post" data-post-id="' + escapeHtml(post.id) + '"><span>Excluir</span></button>'
                      )
                      : "") +
                    '<button class="action-button" data-action="open-person-profile" data-person-id="' + escapeHtml(post.authorId || "") + '">' +
                      "<span>Ver perfil</span>" +
                    "</button>" +
                    '<button class="action-button" data-action="toggle-comments" data-post-id="' + escapeHtml(post.id) + '">' +
                      "<span>" + (post.showComments ? "Ocultar comentarios" : "Comentar") + "</span>" +
                    "</button>" +
                    '<button class="action-button" data-action="share-post" data-post-id="' + escapeHtml(post.id) + '">' +
                      "<span>Compartilhar</span>" +
                    "</button>" +
                  "</div>" +
                  '<div class="comment-panel ' + (post.showComments ? "" : "hidden") + '">' +
                    '<div class="comment-list">' + (commentsHtml || '<div class="comment-item">Nenhum comentario ainda. Seja o primeiro.</div>') + "</div>" +
                    '<form class="comment-form" data-post-id="' + escapeHtml(post.id) + '">' +
                      '<input class="inline-input" type="text" name="comment" placeholder="Escreva um comentario..." />' +
                      '<button class="button-outline" type="submit">Enviar</button>' +
                    "</form>" +
                  "</div>" +
                "</div>" +
              "</article>"
            );
          })
          .join("");
      }

      function renderProducts() {
        const data = filteredData();
        elements.productsSummary.textContent =
          data.products.length + " produto" + (data.products.length === 1 ? "" : "s") + " em destaque.";

        if (!data.products.length) {
          elements.productsList.innerHTML =
            '<div class="empty-card">Nenhum produto encontrado para essa busca.</div>';
          return;
        }

        elements.productsList.innerHTML = data.products
          .map(function (product) {
            return (
              '<article class="product-card">' +
                '<img src="' + escapeHtml(product.image) + '" alt="' + escapeHtml(product.name) + '" />' +
                '<div class="product-content">' +
                  '<div class="product-name">' + escapeHtml(product.name) + "</div>" +
                  '<div class="product-price">' + formatMoney(product.price) + "</div>" +
                  '<div class="product-meta">' + escapeHtml(product.location) + " - " + escapeHtml(product.description) + "</div>" +
                  '<div class="small-copy">Anunciado por ' + escapeHtml(product.owner || "Usuario") + "</div>" +
                  '<div class="product-actions product-market-actions">' +
                    '<button class="button-soft" data-action="open-product" data-product-id="' + escapeHtml(product.id) + '">Ver detalhes</button>' +
                    '<button class="button-soft" data-action="open-person-profile" data-person-id="' + escapeHtml(product.ownerId || "") + '">Ver vendedor</button>' +
                    '<button class="button-outline" data-action="interest-product" data-product-id="' + escapeHtml(product.id) + '">Tenho interesse</button>' +
                  "</div>" +
                "</div>" +
              "</article>"
            );
          })
          .join("");
      }

      function renderFriends() {
        const data = filteredData();
        const connected = addedFriendsCount();
        elements.friendsSummary.textContent =
          connected > 0
            ? connected + " conex" + (connected === 1 ? "ao" : "oes") + " adicionadas."
            : "Sugestoes prontas para voce testar.";
        elements.friendsChip.setAttribute("data-active", connected > 0 ? "true" : "false");
        elements.friendsChip.textContent = connected > 0 ? connected + " conectados" : "Conecte-se";

        if (!data.suggestions.length) {
          elements.friendsList.innerHTML =
            '<div class="empty-card">Nenhuma sugestao combina com a sua busca.</div>';
          return;
        }

        elements.friendsList.innerHTML = data.suggestions
          .map(function (friend) {
            return (
              '<article class="friend-card">' +
                '<div class="friend-left">' +
                  '<img class="avatar" src="' + escapeHtml(friend.avatar) + '" alt="' + escapeHtml(friend.name) + '" />' +
                  '<div class="friend-copy">' +
                    '<div class="friend-name"><span class="friend-name-text">' + escapeHtml(friend.name) + "</span>" + verifiedBadgeHtml(friend.verified) + "</div>" +
                    '<div class="friend-subtitle">' + escapeHtml(friend.subtitle) + "</div>" +
                  "</div>" +
                "</div>" +
                '<div class="product-actions friend-actions">' +
                  '<button class="button-soft" data-action="open-person-profile" data-person-id="' + escapeHtml(friend.personId || "") + '">Ver perfil</button>' +
                  '<button class="button-soft" data-action="open-chat" data-person-id="' + escapeHtml(friend.personId || "") + '">Chat</button>' +
                  '<button class="chip" data-action="toggle-friend" data-friend-id="' + escapeHtml(friend.id) + '" data-active="' + (friend.added ? "true" : "false") + '">' +
                    (friend.added ? "Adicionado" : "Adicionar") +
                  "</button>" +
                "</div>" +
              "</article>"
            );
          })
          .join("");
      }

      function renderProfile() {
        elements.profileAvatar.src = state.currentUser.avatar;
        elements.profileName.innerHTML = '<span class="name-with-badge">' + escapeHtml(state.currentUser.name) + verifiedBadgeHtml(state.currentUser.verified) + "</span>";
        elements.profileSubtitle.textContent = state.currentUser.tagline;
        elements.profileBioPreview.textContent = state.currentUser.bio || "Complete sua bio na configuracao de perfil.";
        elements.profileMetaLine.textContent = compactMeta([state.currentUser.location, state.currentUser.work, state.currentUser.website]) || "Adicione cidade, trabalho ou site.";
        elements.profileStatus.textContent = state.ui.activeTab === "create" ? "Criando" : "Explorando";
        elements.profileStatus.setAttribute("data-active", state.ui.activeTab === "create" ? "true" : "false");

        elements.statPosts.textContent = String(currentUserPosts().length);
        elements.statLikes.textContent = String(likedCount());
        elements.statFriends.textContent = String(addedFriendsCount());
        elements.statStories.textContent = String(viewedStoriesCount());
      }

      function renderTrendingTopics() {
        const topics = [
          {
            label: "Praia",
            note: "Posts, fotos e conversas puxando cenarios de praia e luz natural."
          },
          {
            label: "Projetos",
            note: "Bastidores criativos, rotina de trabalho e novas ideias da rede."
          },
          {
            label: "Marketplace",
            note: "Anuncios, vendas e interesses em produtos da comunidade."
          },
          {
            label: "Stories",
            note: "Momentos rapidos e atualizacoes curtas que estao circulando agora."
          }
        ];

        elements.trendingSummary.textContent = topics.length + " temas em destaque agora.";
        elements.trendingChip.setAttribute("data-active", "true");
        elements.trendingChip.textContent = "Ao vivo";
        elements.trendingList.innerHTML = topics
          .map(function (topic, index) {
            return (
              '<button class="trending-item" data-action="open-trending-topic" data-topic="' + escapeHtml(topic.label) + '">' +
                "<strong>" + (index + 1) + ". " + escapeHtml(topic.label) + "</strong>" +
                "<p>" + escapeHtml(topic.note) + "</p>" +
              "</button>"
            );
          })
          .join("");
      }

      function renderNotifications() {
        if (!state.ui.notificationsOpen) {
          elements.notificationsDrawer.classList.add("hidden");
          elements.notificationsDrawer.innerHTML = "";
          return;
        }

        elements.notificationsDrawer.classList.remove("hidden");
        elements.notificationsDrawer.innerHTML =
          '<div class="drawer-head">' +
            "<h3>Notificacoes</h3>" +
            '<div class="modal-actions">' +
              '<button class="button-soft" data-action="mark-all-read">Marcar tudo</button>' +
              '<button class="button-outline" data-action="close-notifications">Fechar</button>' +
            "</div>" +
          "</div>" +
          '<div class="notification-list">' +
            state.notifications
              .map(function (item) {
                return (
                  '<article class="notification-item" data-unread="' + (item.unread ? "true" : "false") + '">' +
                    '<p class="notification-copy">' + escapeHtml(item.text) + "</p>" +
                    '<div class="notification-time">' + escapeHtml(item.time) + "</div>" +
                  "</article>"
                );
              })
              .join("") +
          "</div>";
      }

      function renderChatDrawer() {
        if (!state.ui.chatOpen) {
          elements.chatDrawer.classList.add("hidden");
          elements.chatDrawer.innerHTML = "";
          return;
        }

        if (!state.ui.activeChatPersonId && state.chats.length) {
          state.ui.activeChatPersonId = state.chats[0].personId;
        }

        const chats = state.chats
          .slice()
          .sort(function (a, b) {
            const lastA = (a.messages || [])[a.messages.length - 1];
            const lastB = (b.messages || [])[b.messages.length - 1];
            const timeA = lastA ? lastA.time : "";
            const timeB = lastB ? lastB.time : "";
            return timeA < timeB ? 1 : -1;
          });
        const chatSearch = (state.ui.chatSearch || "").trim().toLowerCase();
        const filteredChats = chats.filter(function (chat) {
          if (!chatSearch) {
            return true;
          }
          const person = getPersonProfile(chat.personId) || {};
          const lastMessage = (chat.messages || [])[chat.messages.length - 1];
          return [
            person.name || "",
            person.tagline || "",
            lastMessage ? lastMessage.text : ""
          ].join(" ").toLowerCase().indexOf(chatSearch) !== -1;
        });
        const activeChat = getChatByPersonId(state.ui.activeChatPersonId);
        if (activeChat) {
          markChatAsRead(activeChat.personId);
        }
        const activePerson = activeChat ? getPersonProfile(activeChat.personId) : null;
        const lastOutgoingMessage = activeChat
          ? activeChat.messages
              .slice()
              .reverse()
              .find(function (message) {
                return message.senderId === state.currentUser.id;
              })
          : null;
        const messagesHtml = activeChat && activeChat.messages.length
          ? activeChat.messages
              .map(function (message) {
                return (
                  '<article class="chat-message" data-mine="' + (message.senderId === state.currentUser.id ? "true" : "false") + '">' +
                    "<p>" + escapeHtml(message.text) + "</p>" +
                    "<span>" + escapeHtml(message.time) + "</span>" +
                    (lastOutgoingMessage && message.id === lastOutgoingMessage.id && message.read
                      ? '<small class="chat-message-status">Visto</small>'
                      : "") +
                  "</article>"
                );
              })
              .join("")
          : '<div class="chat-empty"><div><strong>Escolha uma conversa</strong><p>Nenhuma mensagem por aqui ainda.</p></div></div>';

        elements.chatDrawer.classList.remove("hidden");
        elements.chatDrawer.innerHTML =
          '<div class="chat-head">' +
            '<div class="chat-head-copy">' +
              "<h3>Messenger</h3>" +
              "<p>Converse com sua rede em tempo real.</p>" +
            "</div>" +
            '<div class="modal-actions">' +
              '<button class="button-outline" data-action="close-chat">Fechar</button>' +
            "</div>" +
          "</div>" +
          '<div class="chat-shell">' +
            '<aside class="chat-sidebar">' +
              '<div class="chat-search">' +
                '<span class="chat-search-icon">&#8981;</span>' +
                '<input id="chatSearchInput" class="chat-search-input" type="text" placeholder="Buscar conversa..." value="' + escapeHtml(state.ui.chatSearch || "") + '" />' +
              "</div>" +
              '<div class="chat-tabs">' +
                (filteredChats.length
                  ? filteredChats
                      .map(function (chat) {
                        const person = getPersonProfile(chat.personId);
                        const lastMessage = (chat.messages || [])[chat.messages.length - 1];
                        const unread = (chat.messages || []).filter(function (message) {
                          return message.senderId !== state.currentUser.id && !message.read;
                        }).length;
                        return (
                          '<button class="chat-tab" data-action="select-chat" data-person-id="' + escapeHtml(chat.personId) + '" data-active="' + (chat.personId === state.ui.activeChatPersonId ? "true" : "false") + '">' +
                            '<div class="chat-tab-top">' +
                              '<div class="chat-tab-person">' +
                                '<img class="chat-tab-avatar" src="' + escapeHtml(person ? person.avatar : fallbackImage(chat.personId)) + '" alt="' + escapeHtml(person ? person.name : "Pessoa") + '" />' +
                                '<div class="chat-tab-copy">' +
                                  "<strong>" + escapeHtml(person ? person.name : "Pessoa") + "</strong>" +
                                  "<p>" + escapeHtml(lastMessage ? lastMessage.text : "Sem mensagens ainda.") + "</p>" +
                                "</div>" +
                              "</div>" +
                              (unread ? '<span class="badge">' + unread + "</span>" : "") +
                            "</div>" +
                          "</button>"
                        );
                      })
                      .join("")
                  : '<div class="chat-empty"><div><strong>Nenhuma conversa encontrada</strong><p>Tente outro nome ou trecho da mensagem.</p></div></div>') +
              "</div>" +
            "</aside>" +
            '<section class="chat-main">' +
              (activePerson
                ? '<div class="chat-person">' +
                    '<img class="avatar" src="' + escapeHtml(activePerson.avatar) + '" alt="' + escapeHtml(activePerson.name) + '" />' +
                    '<div class="chat-person-copy">' +
                      '<strong><span class="name-with-badge">' + escapeHtml(activePerson.name) + verifiedBadgeHtml(activePerson.verified) + "</span></strong>" +
                      "<p>" + escapeHtml(activePerson.tagline || "Conversa aberta.") + "</p>" +
                      '<span class="chat-status">Ativo agora</span>' +
                    "</div>" +
                    '<div class="chat-header-actions">' +
                      '<button class="chat-icon-button" type="button" data-action="focus-chat-search" title="Buscar conversa" aria-label="Buscar conversa">' +
                        '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6"></circle><path d="m20 20-3.5-3.5"></path></svg>' +
                      "</button>" +
                      '<button class="chat-icon-button" type="button" data-action="chat-audio-call" title="Ligacao" aria-label="Ligacao">' +
                        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8l-1.4 1.4a16 16 0 0 0 6.4 6.4l1.4-1.4a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.7 2Z"></path></svg>' +
                      "</button>" +
                      '<button class="chat-icon-button" type="button" data-action="chat-video-call" title="Videochamada" aria-label="Videochamada">' +
                        '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="13" height="12" rx="3"></rect><path d="m16 10 5-3v10l-5-3"></path></svg>' +
                      "</button>" +
                      '<button class="chat-icon-button" type="button" data-action="open-person-profile" data-person-id="' + escapeHtml(activePerson.id) + '" title="Ver perfil" aria-label="Ver perfil">' +
                        '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M5 20a7 7 0 0 1 14 0"></path></svg>' +
                      "</button>" +
                    "</div>" +
                  "</div>"
                : "") +
              '<div class="chat-messages">' + messagesHtml + "</div>" +
              '<form id="chatForm" class="chat-form" data-emoji-open="false">' +
                '<div class="chat-emoji-wrap">' +
                  '<button class="chat-emoji-button" type="button" data-action="toggle-chat-emoji" aria-label="Abrir emojis" title="Emojis">&#9786;</button>' +
                  '<div class="chat-emoji-panel">' +
                    chatEmojiOptions.map(function (emoji) {
                      return '<button class="chat-emoji-option" type="button" data-action="insert-chat-emoji" data-emoji="' + escapeHtml(emoji) + '" aria-label="Adicionar emoji">' + escapeHtml(emoji) + "</button>";
                    }).join("") +
                  "</div>" +
                "</div>" +
                '<input class="inline-input" type="text" name="chat-message" placeholder="Escreva sua mensagem..." />' +
                '<button class="button-primary" type="submit">Enviar</button>' +
              "</form>" +
            "</section>" +
          "</div>";
      }

      function renderModal() {
        const modal = state.ui.modal;
        if (!modal) {
          elements.modalLayer.classList.add("hidden");
          elements.modalLayer.innerHTML = "";
          return;
        }

        elements.modalLayer.classList.remove("hidden");

        if (modal.type === "story") {
          const story = state.stories.find(function (item) {
            return item.id === modal.id;
          });
          if (!story) {
            closeModal();
            return;
          }
          const previewImage = storyPreviewImage(story);

          elements.modalLayer.innerHTML =
            '<div class="modal">' +
              '<div class="modal-hero">' +
                "<h3>Story de " + escapeHtml(story.name) + "</h3>" +
                "<p>Uma visualizacao rapida para simular a abertura do story.</p>" +
              "</div>" +
              '<div class="modal-body">' +
                '<div class="story-preview">' +
                  '<img class="avatar" src="' + escapeHtml(story.avatar) + '" alt="' + escapeHtml(story.name) + '" />' +
                  "<div>" +
                    "<strong>" + escapeHtml(story.name) + "</strong>" +
                    '<p class="helper">Status do momento: ' + escapeHtml(story.status) + "</p>" +
                  "</div>" +
                "</div>" +
                '<div class="story-banner">' +
                  '<img src="' + escapeHtml(previewImage) + '" alt="' + escapeHtml(story.name) + '" />' +
                "</div>" +
                "<p>Esse story agora esta marcado como visto e atualiza o contador do painel.</p>" +
                '<div class="modal-actions">' +
                  '<button class="button-soft" data-action="open-person-profile" data-person-id="' + escapeHtml(story.personId || "") + '">Ver perfil</button>' +
                  '<button class="button-primary" data-action="close-modal">Voltar ao feed</button>' +
                "</div>" +
              "</div>" +
            "</div>";
          return;
        }

        if (modal.type === "reel") {
          const reel = state.reels.find(function (item) {
            return item.id === modal.id;
          });
          if (!reel) {
            closeModal();
            return;
          }

          const reelPerson = getPersonProfile(reel.personId);
          elements.modalLayer.innerHTML =
            '<div class="modal reel-modal">' +
              '<div class="modal-hero">' +
                "<h3>Reel em destaque</h3>" +
                "<p>Visualizacao rapida de video curto dentro da sua rede.</p>" +
              "</div>" +
              '<div class="modal-body">' +
                '<div class="reel-player">' +
                  '<div class="reel-stage" style="--reel-image:url(' + escapeHtml(reel.coverImage || fallbackImage(reel.id)) + ')">' +
                    '<div class="reel-stage-copy">' +
                      '<div class="reel-stage-bar"><span></span></div>' +
                      "<p>" + escapeHtml(reel.caption) + "</p>" +
                      '<div class="reel-meta">' +
                        "<span>" + escapeHtml(reel.audio || "Audio em alta") + "</span>" +
                        "<span>" + escapeHtml(reel.duration || "0:15") + "</span>" +
                        "<span>" + reel.views + " views</span>" +
                      "</div>" +
                    "</div>" +
                  "</div>" +
                  '<div class="reel-side">' +
                    '<div class="reel-side-card">' +
                      '<p><strong><span class="name-with-badge">' + escapeHtml(reel.name) + verifiedBadgeHtml(reel.verified) + "</span></strong></p>" +
                      '<p>' + escapeHtml((reelPerson && reelPerson.tagline) || "Criador ativo nos destaques da rede.") + "</p>" +
                      "<p><strong>Curtidas:</strong> " + reel.likes + "</p>" +
                      "<p><strong>Status:</strong> " + (reel.watched ? "Ja visto por voce" : "Novo para voce") + "</p>" +
                    "</div>" +
                    '<div class="reel-side-card">' +
                      "<p><strong>Acoes</strong></p>" +
                      '<div class="modal-actions">' +
                        '<button class="button-soft" data-action="step-reel" data-direction="prev">Anterior</button>' +
                        '<button class="button-soft" data-action="step-reel" data-direction="next">Proximo</button>' +
                        '<button class="button-soft" data-action="open-person-profile" data-person-id="' + escapeHtml(reel.personId || "") + '">Ver perfil</button>' +
                        '<button class="button-primary" data-action="close-modal">Fechar</button>' +
                      "</div>" +
                    "</div>" +
                  "</div>" +
                "</div>" +
              "</div>" +
            "</div>";
          return;
        }

        if (modal.type === "product") {
          const product = state.products.find(function (item) {
            return item.id === modal.id;
          });
          if (!product) {
            closeModal();
            return;
          }

          elements.modalLayer.innerHTML =
            '<div class="modal">' +
              '<div class="modal-hero">' +
                "<h3>" + escapeHtml(product.name) + "</h3>" +
                "<p>Detalhes do produto e acoes simuladas de interesse.</p>" +
              "</div>" +
              '<div class="modal-body">' +
                '<div class="product-preview">' +
                  '<img src="' + escapeHtml(product.image) + '" alt="' + escapeHtml(product.name) + '" />' +
                "</div>" +
                "<p><strong>Preco:</strong> " + formatMoney(product.price) + "</p>" +
                "<p><strong>Anunciante:</strong> " + escapeHtml(product.owner || "Usuario") + "</p>" +
                "<p><strong>Cidade:</strong> " + escapeHtml(product.location) + "</p>" +
                "<p>" + escapeHtml(product.description) + "</p>" +
                '<div class="modal-actions">' +
                  '<button class="button-soft" data-action="open-person-profile" data-person-id="' + escapeHtml(product.ownerId || "") + '">Ver perfil do vendedor</button>' +
                  '<button class="button-primary" data-action="interest-product" data-product-id="' + escapeHtml(product.id) + '">Tenho interesse</button>' +
                  '<button class="button-outline" data-action="close-modal">Fechar</button>' +
                "</div>" +
              "</div>" +
            "</div>";
          return;
        }

        if (modal.type === "person-profile") {
          const person = getPersonProfile(modal.id);
          if (!person) {
            closeModal();
            return;
          }

          const personPosts = state.posts.filter(function (post) {
            return post.authorId === person.id;
          });
          const personProducts = state.products.filter(function (product) {
            return product.ownerId === person.id;
          });
          const personStory = state.stories.find(function (story) {
            return story.personId === person.id;
          });
          const personSuggestion = state.suggestions.find(function (friend) {
            return friend.personId === person.id;
          });

          const postItemsHtml = personPosts.length
            ? personPosts
                .map(function (post) {
                  return (
                    '<div class="profile-list-item">' +
                      "<strong>" + escapeHtml(post.createdAt) + "</strong>" +
                      "<p>" + escapeHtml(post.content) + "</p>" +
                    "</div>"
                  );
                })
                .join("")
            : '<div class="profile-list-item"><strong>Sem posts no momento</strong><p>Essa pessoa ainda nao publicou nada no feed visivel.</p></div>';

          const productItemsHtml = personProducts.length
            ? personProducts
                .map(function (product) {
                  return (
                    '<div class="profile-list-item">' +
                      "<strong>" + escapeHtml(product.name) + " - " + formatMoney(product.price) + "</strong>" +
                      "<p>" + escapeHtml(product.location) + " - " + escapeHtml(product.description) + "</p>" +
                    "</div>"
                  );
                })
                .join("")
            : '<div class="profile-list-item"><strong>Sem anuncios</strong><p>Nenhum item publico no marketplace por enquanto.</p></div>';

          const detailItemsHtml = [
            person.location
              ? '<div class="detail-item"><div><strong>Localizacao</strong><span>Base principal da pessoa na rede.</span></div><span>' + escapeHtml(person.location) + "</span></div>"
              : "",
            person.work
              ? '<div class="detail-item"><div><strong>Atuacao</strong><span>Como essa pessoa se apresenta.</span></div><span>' + escapeHtml(person.work) + "</span></div>"
              : "",
            person.website
              ? '<div class="detail-item"><div><strong>Site</strong><span>Link publico do perfil.</span></div><span><a href="' + escapeHtml(person.website) + '" target="_blank" rel="noreferrer">' + escapeHtml(person.website) + "</a></span></div>"
              : "",
            person.mutual
              ? '<div class="detail-item"><div><strong>Contexto</strong><span>Conexao sugerida pela plataforma.</span></div><span>' + escapeHtml(person.mutual) + "</span></div>"
              : "",
            personStory
              ? '<div class="detail-item"><div><strong>Story atual</strong><span>O que a pessoa publicou agora.</span></div><span>' + escapeHtml(personStory.status) + "</span></div>"
              : ""
          ].filter(Boolean).join("");

          elements.modalLayer.innerHTML =
            '<div class="modal modal-wide">' +
              '<div class="modal-hero">' +
                "<h3>Perfil da pessoa</h3>" +
                "<p>Veja o resumo publico, posts e produtos dessa pessoa na rede.</p>" +
              "</div>" +
              '<div class="modal-body">' +
                '<div class="profile-cover">' +
                  '<img src="' + escapeHtml(person.coverImage || fallbackImage(person.id + "-cover")) + '" alt="' + escapeHtml(person.name) + '" />' +
                "</div>" +
                '<div class="profile-banner">' +
                  '<img class="avatar" src="' + escapeHtml(person.avatar) + '" alt="' + escapeHtml(person.name) + '" />' +
                  "<div>" +
                    '<h4><span class="name-with-badge">' + escapeHtml(person.name) + verifiedBadgeHtml(person.verified) + "</span></h4>" +
                    "<p>" + escapeHtml(person.tagline || "Pessoa ativa na rede.") + "</p>" +
                  "</div>" +
                  '<span class="chip" data-active="' + (personSuggestion && personSuggestion.added ? "true" : "false") + '">' + (personSuggestion && personSuggestion.added ? "Contato adicionado" : "Perfil publico") + "</span>" +
                "</div>" +
                '<div class="profile-kpis">' +
                  '<div class="profile-kpi"><strong>' + personPosts.length + '</strong><span class="small-copy">posts</span></div>' +
                  '<div class="profile-kpi"><strong>' + personProducts.length + '</strong><span class="small-copy">anuncios</span></div>' +
                  '<div class="profile-kpi"><strong>' + (personStory ? "1" : "0") + '</strong><span class="small-copy">story ativo</span></div>' +
                  '<div class="profile-kpi"><strong>' + (personSuggestion && personSuggestion.added ? "Sim" : "Nao") + '</strong><span class="small-copy">na sua rede</span></div>' +
                "</div>" +
                '<div class="profile-modal-grid">' +
                  '<section class="profile-section">' +
                    "<h4>Sobre</h4>" +
                    "<p>" + escapeHtml(person.bio || "Sem bio disponivel.") + "</p>" +
                    '<div class="detail-list">' + (detailItemsHtml || '<div class="detail-item"><div><strong>Sem detalhes publicos</strong><span>Essa pessoa ainda nao preencheu mais informacoes.</span></div><span>Indisponivel</span></div>') + "</div>" +
                  "</section>" +
                  '<section class="profile-section">' +
                    "<h4>Posts recentes</h4>" +
                    '<div class="profile-list">' + postItemsHtml + "</div>" +
                  "</section>" +
                "</div>" +
                '<div class="profile-modal-grid">' +
                  '<section class="profile-section">' +
                    "<h4>Marketplace</h4>" +
                    '<div class="profile-list">' + productItemsHtml + "</div>" +
                  "</section>" +
                  '<section class="profile-section">' +
                    "<h4>Conexao</h4>" +
                    '<div class="profile-list">' +
                      '<div class="profile-list-item"><strong>Status</strong><p>' + escapeHtml(personSuggestion ? personSuggestion.subtitle : "Perfil descoberto pelo feed.") + "</p></div>" +
                      '<div class="profile-list-item"><strong>Relacao com voce</strong><p>' + escapeHtml(personSuggestion && personSuggestion.added ? "Essa pessoa ja esta adicionada na sua rede." : "Voce ainda pode adicionar essa pessoa a partir daqui.") + "</p></div>" +
                    "</div>" +
                  "</section>" +
                "</div>" +
                '<div class="modal-actions">' +
                  (personStory ? '<button class="button-soft" data-action="open-story" data-story-id="' + escapeHtml(personStory.id) + '">Abrir story</button>' : "") +
                  '<button class="button-soft" data-action="open-chat" data-person-id="' + escapeHtml(person.id) + '">Enviar mensagem</button>' +
                  (personSuggestion ? '<button class="button-primary" data-action="toggle-friend" data-friend-id="' + escapeHtml(personSuggestion.id) + '" data-active="' + (personSuggestion.added ? "true" : "false") + '">' + (personSuggestion.added ? "Remover da rede" : "Adicionar contato") + "</button>" : "") +
                  '<button class="button-outline" data-action="close-modal">Fechar</button>' +
                "</div>" +
              "</div>" +
            "</div>";
          return;
        }

        if (modal.type === "admin") {
          const totalComments = state.posts.reduce(function (total, post) {
            return total + (post.comments || []).length;
          }, 0);
          const totalMessages = state.chats.reduce(function (total, chat) {
            return total + (chat.messages || []).length;
          }, 0);
          const verifiedPeople = Object.keys(peopleProfiles).filter(function (key) {
            return peopleProfiles[key].verified;
          }).length + (state.currentUser.verified ? 1 : 0);
          const latestNotification = state.notifications[0];

          elements.modalLayer.innerHTML =
            '<div class="modal modal-wide">' +
              '<div class="modal-hero">' +
                "<h3>Painel de admin</h3>" +
                "<p>Controle rapido da demo com indicadores, moderacao e automacoes simples.</p>" +
              "</div>" +
              '<div class="modal-body">' +
                '<div class="profile-banner">' +
                  '<img class="avatar" src="' + escapeHtml(state.currentUser.avatar) + '" alt="' + escapeHtml(state.currentUser.name) + '" />' +
                  "<div>" +
                    '<h4><span class="name-with-badge">' + escapeHtml(state.currentUser.name) + verifiedBadgeHtml(state.currentUser.verified) + "</span></h4>" +
                    "<p>Permissoes de administrador ativas para acompanhar e editar a simulacao.</p>" +
                  "</div>" +
                  '<span class="chip" data-active="true">Admin ativo</span>' +
                "</div>" +
                '<section class="settings-section">' +
                  "<h4>Visao geral</h4>" +
                  '<div class="admin-stat-grid">' +
                    '<div class="admin-stat-card"><strong>' + state.posts.length + '</strong><span>posts no feed</span></div>' +
                    '<div class="admin-stat-card"><strong>' + state.products.length + '</strong><span>produtos no marketplace</span></div>' +
                    '<div class="admin-stat-card"><strong>' + state.suggestions.length + '</strong><span>pessoas sugeridas</span></div>' +
                    '<div class="admin-stat-card"><strong>' + state.stories.length + '</strong><span>stories ativos</span></div>' +
                    '<div class="admin-stat-card"><strong>' + totalComments + '</strong><span>comentarios totais</span></div>' +
                    '<div class="admin-stat-card"><strong>' + totalMessages + '</strong><span>mensagens trocadas</span></div>' +
                    '<div class="admin-stat-card"><strong>' + unreadCount() + '</strong><span>alertas pendentes</span></div>' +
                    '<div class="admin-stat-card"><strong>' + unreadChatCount() + '</strong><span>mensagens nao lidas</span></div>' +
                  "</div>" +
                "</section>" +
                '<div class="profile-modal-grid">' +
                  '<section class="profile-section">' +
                    "<h4>Acoes rapidas</h4>" +
                    '<p class="helper">Use esses comandos para simular movimento na rede e testar o comportamento da interface.</p>' +
                    '<div class="admin-action-grid">' +
                      '<button class="button-primary" data-action="admin-seed-post">Inserir post teste</button>' +
                      '<button class="button-primary" data-action="admin-seed-product">Inserir produto teste</button>' +
                      '<button class="button-primary" data-action="admin-seed-notification">Criar alerta</button>' +
                      '<button class="button-soft" data-action="admin-seed-story">Simular story</button>' +
                      '<button class="button-soft" data-action="admin-seed-chat">Simular mensagem</button>' +
                      '<button class="button-soft" data-action="admin-mark-chats-read">Ler todos os chats</button>' +
                      '<button class="button-outline" data-action="admin-remove-latest-post">Remover ultimo post</button>' +
                      '<button class="button-outline" data-action="admin-remove-latest-product">Remover ultimo produto</button>' +
                      '<button class="button-outline" data-action="admin-clear-notifications">Limpar alertas</button>' +
                      '<button class="button-outline" data-action="admin-reset-demo">Resetar demo</button>' +
                      '<button class="button-outline" data-action="admin-toggle-current-user-verified">' + (state.currentUser.verified ? "Remover selo admin" : "Ativar selo admin") + "</button>" +
                    "</div>" +
                  "</section>" +
                  '<section class="profile-section">' +
                    "<h4>Monitoramento</h4>" +
                    '<div class="detail-list">' +
                      '<button class="detail-item detail-item-button" type="button" data-action="open-verified-profiles"><div><strong>Perfis verificados</strong><span>Total de perfis com selo azul na demo.</span></div><span>' + verifiedPeople + "</span></button>" +
                      '<div class="detail-item"><div><strong>Chat principal</strong><span>Conversa em foco no momento.</span></div><span>' + escapeHtml((getPersonProfile(state.ui.activeChatPersonId || "") || {}).name || "Nenhuma") + "</span></div>" +
                      '<div class="detail-item"><div><strong>Ultimo alerta</strong><span>Evento mais recente disparado na rede.</span></div><span>' + escapeHtml(latestNotification ? latestNotification.text : "Sem alertas") + "</span></div>" +
                      '<div class="detail-item"><div><strong>Usuario admin</strong><span>Conta atual com acesso ao painel.</span></div><span>' + escapeHtml(state.currentUser.role || "admin") + "</span></div>" +
                    "</div>" +
                  "</section>" +
                "</div>" +
                '<div class="profile-modal-grid">' +
                  '<section class="profile-section">' +
                    "<h4>Integridade da demo</h4>" +
                    '<div class="profile-list">' +
                      '<div class="profile-list-item"><strong>Feed</strong><p>' + escapeHtml(state.posts.length ? "Com conteudo suficiente para testes." : "Sem posts; considere adicionar um post de teste.") + "</p></div>" +
                      '<div class="profile-list-item"><strong>Marketplace</strong><p>' + escapeHtml(state.products.length ? "Produtos prontos para simular compra e venda." : "Sem produtos para exibir.") + "</p></div>" +
                      '<div class="profile-list-item"><strong>Mensageria</strong><p>' + escapeHtml(state.chats.length ? "Conversas disponiveis no chat." : "Nenhuma conversa criada ainda.") + "</p></div>" +
                    "</div>" +
                  "</section>" +
                  '<section class="profile-section">' +
                    "<h4>Proximos testes</h4>" +
                    '<div class="profile-list">' +
                      '<div class="profile-list-item"><strong>Jornada social</strong><p>Abra um perfil, envie mensagem, publique um post e confirme os contadores.</p></div>' +
                      '<div class="profile-list-item"><strong>Marketplace</strong><p>Crie um anuncio, abra o perfil do vendedor e dispare interesse.</p></div>' +
                      '<div class="profile-list-item"><strong>Admin</strong><p>Gere alertas e mensagens para validar notificacoes e chat ao mesmo tempo.</p></div>' +
                    "</div>" +
                  "</section>" +
                "</div>" +
                '<div class="modal-actions">' +
                  '<button class="button-primary" data-action="focus-composer">Criar conteudo</button>' +
                  '<button class="button-soft" data-action="toggle-chat">Abrir chat</button>' +
                  '<button class="button-outline" data-action="close-modal">Fechar painel</button>' +
                "</div>" +
              "</div>" +
            "</div>";
          return;
        }

        if (modal.type === "edit-post") {
          const post = state.posts.find(function (item) {
            return item.id === modal.id;
          });
          if (!post || post.authorId !== state.currentUser.id) {
            closeModal();
            return;
          }

          elements.modalLayer.innerHTML =
            '<div class="modal">' +
              '<div class="modal-hero">' +
                "<h3>Editar post</h3>" +
                "<p>Atualize o texto e a imagem do seu post sem perder curtidas, comentarios e reacoes.</p>" +
              "</div>" +
              '<div class="modal-body">' +
                '<form id="editPostForm" data-post-id="' + escapeHtml(post.id) + '">' +
                  '<p class="helper">So o dono do post pode editar este conteudo.</p>' +
                  '<textarea class="inline-textarea" name="edit-post-content" placeholder="Atualize o texto do post">' + escapeHtml(post.content || "") + "</textarea>" +
                  '<div style="height:12px"></div>' +
                  '<input class="inline-input" name="edit-post-image" type="url" placeholder="URL da imagem" value="' + escapeHtml(post.image || "") + '" />' +
                  '<div class="modal-actions" style="margin-top:16px">' +
                    '<button class="button-primary" type="submit">Salvar edicao</button>' +
                    '<button class="button-outline" type="button" data-action="close-modal">Cancelar</button>' +
                  "</div>" +
                "</form>" +
              "</div>" +
            "</div>";
          return;
        }

        if (modal.type === "delete-post") {
          const post = state.posts.find(function (item) {
            return item.id === modal.id;
          });
          if (!post || post.authorId !== state.currentUser.id) {
            closeModal();
            return;
          }

          elements.modalLayer.innerHTML =
            '<div class="modal">' +
              '<div class="modal-hero">' +
                "<h3>Excluir post</h3>" +
                "<p>Essa acao remove o post do feed desta demo.</p>" +
              "</div>" +
              '<div class="modal-body">' +
                '<form id="deletePostForm" data-post-id="' + escapeHtml(post.id) + '">' +
                  "<p>Tem certeza que deseja excluir este post?</p>" +
                  '<div class="profile-list-item">' +
                    "<strong>" + escapeHtml(post.createdAt) + "</strong>" +
                    "<p>" + escapeHtml(post.content || "Post sem texto") + "</p>" +
                  "</div>" +
                  '<div class="modal-actions" style="margin-top:16px">' +
                    '<button class="button-primary" type="submit">Confirmar exclusao</button>' +
                    '<button class="button-outline" type="button" data-action="close-modal">Cancelar</button>' +
                  "</div>" +
                "</form>" +
              "</div>" +
            "</div>";
          return;
        }

        if (modal.type === "verified-profiles") {
          const verifiedProfiles = Object.keys(peopleProfiles)
            .map(function (key) {
              return peopleProfiles[key];
            })
            .filter(function (person) {
              return person.verified;
            });

          if (state.currentUser.verified) {
            verifiedProfiles.unshift({
              id: state.currentUser.id,
              name: state.currentUser.name,
              avatar: state.currentUser.avatar,
              tagline: state.currentUser.tagline,
              verified: true,
              isCurrentUser: true
            });
          }

          const verifiedListHtml = verifiedProfiles.length
            ? verifiedProfiles
                .map(function (person) {
                  return (
                    '<div class="profile-list-item">' +
                      '<div class="profile-head" style="margin-bottom:0;">' +
                        '<img class="avatar" src="' + escapeHtml(person.avatar) + '" alt="' + escapeHtml(person.name) + '" />' +
                        '<div style="min-width:0; flex:1 1 auto;">' +
                          '<strong><span class="name-with-badge">' + escapeHtml(person.name) + verifiedBadgeHtml(true) + "</span></strong>" +
                          '<p class="small-copy">' + escapeHtml(person.tagline || "Perfil verificado na rede.") + "</p>" +
                        "</div>" +
                      "</div>" +
                      '<div class="modal-actions">' +
                        (person.isCurrentUser
                          ? '<button class="button-soft" data-action="open-profile">Abrir seu perfil</button>'
                          : '<button class="button-soft" data-action="open-person-profile" data-person-id="' + escapeHtml(person.id) + '">Ver perfil</button>') +
                        (!person.isCurrentUser
                          ? '<button class="button-outline" data-action="open-chat" data-person-id="' + escapeHtml(person.id) + '">Mensagem</button>'
                          : "") +
                      "</div>" +
                    "</div>"
                  );
                })
                .join("")
            : '<div class="profile-list-item"><strong>Nenhum perfil verificado</strong><p>A demo ainda nao tem contas com selo ativo.</p></div>';

          elements.modalLayer.innerHTML =
            '<div class="modal modal-wide">' +
              '<div class="modal-hero">' +
                "<h3>Perfis verificados</h3>" +
                "<p>Lista das contas com selo azul ativas nesta simulacao.</p>" +
              "</div>" +
              '<div class="modal-body">' +
                '<section class="profile-section">' +
                  "<h4>Contas com selo</h4>" +
                  '<div class="profile-list">' + verifiedListHtml + "</div>" +
                "</section>" +
                '<div class="modal-actions">' +
                  '<button class="button-outline" data-action="open-admin">Voltar ao admin</button>' +
                  '<button class="button-primary" data-action="close-modal">Fechar</button>' +
                "</div>" +
              "</div>" +
            "</div>";
          return;
        }

        if (modal.type === "profile") {
          const userPosts = currentUserPosts();
          const userProducts = currentUserProducts();
          const addedFriends = state.suggestions.filter(function (friend) {
            return friend.added;
          });
          const recentNotifications = state.notifications.slice(0, 4);
          const contactItems = [
            state.currentUser.location
              ? '<div class="detail-item"><div><strong>Localizacao</strong><span>Cidade e regiao exibidas no perfil.</span></div><span>' + escapeHtml(state.currentUser.location) + "</span></div>"
              : "",
            state.currentUser.work
              ? '<div class="detail-item"><div><strong>Trabalho</strong><span>Como voce se apresenta profissionalmente.</span></div><span>' + escapeHtml(state.currentUser.work) + "</span></div>"
              : "",
            state.currentUser.website
              ? '<div class="detail-item"><div><strong>Site</strong><span>Link externo do seu perfil.</span></div><span><a href="' + escapeHtml(state.currentUser.website) + '" target="_blank" rel="noreferrer">' + escapeHtml(state.currentUser.website) + "</a></span></div>"
              : "",
            state.currentUser.visibility.email && state.currentUser.email
              ? '<div class="detail-item"><div><strong>Email</strong><span>Contato liberado para visualizacao.</span></div><span>' + escapeHtml(state.currentUser.email) + "</span></div>"
              : "",
            state.currentUser.visibility.phone && state.currentUser.phone
              ? '<div class="detail-item"><div><strong>Telefone</strong><span>Contato rapido para negocios e recados.</span></div><span>' + escapeHtml(state.currentUser.phone) + "</span></div>"
              : "",
            state.currentUser.visibility.birthday && state.currentUser.birthday
              ? '<div class="detail-item"><div><strong>Aniversario</strong><span>Data exibida no perfil publico.</span></div><span>' + escapeHtml(formatBirthday(state.currentUser.birthday)) + "</span></div>"
              : ""
          ].filter(Boolean).join("");

          const postsHtml = userPosts.length
            ? userPosts
                .map(function (post) {
                  return (
                    '<div class="profile-list-item">' +
                      "<strong>" + escapeHtml(post.createdAt) + "</strong>" +
                      "<p>" + escapeHtml(post.content) + "</p>" +
                    "</div>"
                  );
                })
                .join("")
            : '<div class="profile-list-item"><strong>Nenhum post seu ainda</strong><p>Use o campo "Escreva um novo post" para aparecer aqui.</p></div>';

          const friendsHtml = addedFriends.length
            ? addedFriends
                .map(function (friend) {
                  return (
                    '<div class="profile-list-item">' +
                      "<strong>" + escapeHtml(friend.name) + "</strong>" +
                      "<p>" + escapeHtml(friend.subtitle) + "</p>" +
                    "</div>"
                  );
                })
                .join("")
            : '<div class="profile-list-item"><strong>Sem conexoes adicionadas</strong><p>Adicione pessoas nas sugestoes para montar sua rede.</p></div>';

          const productsHtml = userProducts.length
            ? userProducts
                .map(function (product) {
                  return (
                    '<div class="profile-list-item">' +
                      "<strong>" + escapeHtml(product.name) + " - " + formatMoney(product.price) + "</strong>" +
                      "<p>" + escapeHtml(product.location) + " - " + escapeHtml(product.description) + "</p>" +
                    "</div>"
                  );
                })
                .join("")
            : '<div class="profile-list-item"><strong>Sem anuncios seus</strong><p>Publique um item em "Vender" para acompanhar seus produtos aqui.</p></div>';

          const activityHtml = recentNotifications.length
            ? recentNotifications
                .map(function (item) {
                  return (
                    '<div class="profile-list-item">' +
                      "<strong>" + escapeHtml(item.time) + "</strong>" +
                      "<p>" + escapeHtml(item.text) + "</p>" +
                    "</div>"
                  );
                })
                .join("")
            : '<div class="profile-list-item"><strong>Sem atividade recente</strong><p>As suas interacoes vao aparecer aqui.</p></div>';

          elements.modalLayer.innerHTML =
            '<div class="modal modal-wide">' +
              '<div class="modal-hero">' +
                "<h3>Perfil completo</h3>" +
                "<p>Uma visao ampliada da sua identidade, atividade e presenca no marketplace.</p>" +
              "</div>" +
              '<div class="modal-body">' +
                '<div class="profile-cover">' +
                  '<img src="' + escapeHtml(state.currentUser.coverImage || fallbackImage(state.currentUser.name + "-cover")) + '" alt="' + escapeHtml(state.currentUser.name) + '" />' +
                "</div>" +
                '<div class="profile-banner">' +
                  '<img class="avatar" src="' + escapeHtml(state.currentUser.avatar) + '" alt="' + escapeHtml(state.currentUser.name) + '" />' +
                  "<div>" +
                    '<h4><span class="name-with-badge">' + escapeHtml(state.currentUser.name) + verifiedBadgeHtml(state.currentUser.verified) + "</span></h4>" +
                    "<p>" + escapeHtml(state.currentUser.tagline) + "</p>" +
                  "</div>" +
                  '<span class="chip" data-active="true">Perfil ativo</span>' +
                "</div>" +
                '<div class="profile-kpis">' +
                  '<div class="profile-kpi"><strong>' + userPosts.length + '</strong><span class="small-copy">posts seus</span></div>' +
                  '<div class="profile-kpi"><strong>' + likedCount() + '</strong><span class="small-copy">curtidas dadas</span></div>' +
                  '<div class="profile-kpi"><strong>' + currentUserCommentCount() + '</strong><span class="small-copy">comentarios seus</span></div>' +
                  '<div class="profile-kpi"><strong>' + userProducts.length + '</strong><span class="small-copy">anuncios seus</span></div>' +
                "</div>" +
                '<div class="profile-modal-grid">' +
                  '<section class="profile-section">' +
                    "<h4>Sobre voce</h4>" +
                    "<p>" + escapeHtml(state.currentUser.bio) + "</p>" +
                    '<div class="detail-list">' + (contactItems || '<div class="detail-item"><div><strong>Detalhes privados</strong><span>Abra a configuracao de perfil para preencher seus dados.</span></div><span>Sem dados</span></div>') + "</div>" +
                  "</section>" +
                  '<section class="profile-section">' +
                    "<h4>Visibilidade</h4>" +
                    '<div class="switch-list">' +
                      '<div class="switch-row"><div><strong>Email publico</strong><span>' + (state.currentUser.visibility.email ? "Exibido no perfil" : "Oculto no perfil") + '</span></div><span>' + (state.currentUser.visibility.email ? "Ativo" : "Oculto") + "</span></div>" +
                      '<div class="switch-row"><div><strong>Telefone publico</strong><span>' + (state.currentUser.visibility.phone ? "Exibido no perfil" : "Oculto no perfil") + '</span></div><span>' + (state.currentUser.visibility.phone ? "Ativo" : "Oculto") + "</span></div>" +
                      '<div class="switch-row"><div><strong>Aniversario publico</strong><span>' + (state.currentUser.visibility.birthday ? "Exibido no perfil" : "Oculto no perfil") + '</span></div><span>' + (state.currentUser.visibility.birthday ? "Ativo" : "Oculto") + "</span></div>" +
                    "</div>" +
                  "</section>" +
                "</div>" +
                '<div class="profile-modal-grid">' +
                  '<section class="profile-section">' +
                    "<h4>Seus posts</h4>" +
                    '<div class="profile-list">' + postsHtml + "</div>" +
                  "</section>" +
                  '<section class="profile-section">' +
                    "<h4>Conexoes</h4>" +
                    '<div class="profile-list">' + friendsHtml + "</div>" +
                  "</section>" +
                "</div>" +
                '<div class="profile-modal-grid">' +
                  '<section class="profile-section">' +
                    "<h4>Seus anuncios</h4>" +
                    '<div class="profile-list">' + productsHtml + "</div>" +
                  "</section>" +
                  '<section class="profile-section">' +
                    "<h4>Atividade recente</h4>" +
                    '<div class="profile-list">' + activityHtml + "</div>" +
                  "</section>" +
                "</div>" +
                '<div class="modal-actions">' +
                  '<button class="button-outline" data-action="open-profile-settings">Configurar perfil</button>' +
                  '<button class="button-primary" data-action="focus-composer">Criar novo post</button>' +
                  '<button class="button-soft" data-action="open-sell-modal">Adicionar produto</button>' +
                  '<button class="button-outline" data-action="close-modal">Fechar</button>' +
                "</div>" +
              "</div>" +
            "</div>";
          return;
        }

        if (modal.type === "profile-settings") {
          elements.modalLayer.innerHTML =
            '<div class="modal modal-wide">' +
              '<div class="modal-hero">' +
                "<h3>Configurar perfil</h3>" +
                "<p>Edite sua identidade, contatos, capa, selo de verificacao e o que fica publico no perfil.</p>" +
              "</div>" +
              '<div class="modal-body">' +
                '<form id="profileSettingsForm">' +
                  '<section class="settings-section">' +
                    "<h4>Identidade</h4>" +
                    '<p class="helper">Esses campos atualizam seu perfil, seus posts e seus anuncios.</p>' +
                    '<div class="field-grid">' +
                      '<input class="inline-input" name="profile-name" type="text" placeholder="Nome exibido" value="' + escapeHtml(state.currentUser.name) + '" />' +
                      '<input class="inline-input" name="profile-tagline" type="text" placeholder="Frase principal" value="' + escapeHtml(state.currentUser.tagline) + '" />' +
                      '<input class="inline-input" name="profile-avatar" type="url" placeholder="URL da foto" value="' + escapeHtml(state.currentUser.avatar) + '" />' +
                      '<input class="inline-input" name="profile-cover" type="url" placeholder="URL da capa" value="' + escapeHtml(state.currentUser.coverImage || "") + '" />' +
                      '<textarea class="inline-textarea full" name="profile-bio" placeholder="Bio do perfil">' + escapeHtml(state.currentUser.bio || "") + "</textarea>" +
                    "</div>" +
                  "</section>" +
                  '<section class="settings-section">' +
                    "<h4>Informacoes pessoais</h4>" +
                    '<div class="field-grid">' +
                      '<input class="inline-input" name="profile-location" type="text" placeholder="Cidade e pais" value="' + escapeHtml(state.currentUser.location || "") + '" />' +
                      '<input class="inline-input" name="profile-work" type="text" placeholder="Profissao ou cargo" value="' + escapeHtml(state.currentUser.work || "") + '" />' +
                      '<input class="inline-input" name="profile-website" type="url" placeholder="Site ou portfolio" value="' + escapeHtml(state.currentUser.website || "") + '" />' +
                      '<input class="inline-input" name="profile-birthday" type="date" value="' + escapeHtml(state.currentUser.birthday || "") + '" />' +
                    "</div>" +
                  "</section>" +
                  '<section class="settings-section">' +
                    "<h4>Contato e privacidade</h4>" +
                    '<div class="field-grid">' +
                      '<input class="inline-input" name="profile-email" type="email" placeholder="Email" value="' + escapeHtml(state.currentUser.email || "") + '" />' +
                      '<input class="inline-input" name="profile-phone" type="text" placeholder="Telefone" value="' + escapeHtml(state.currentUser.phone || "") + '" />' +
                    "</div>" +
                    '<div class="switch-list">' +
                      '<label class="switch-row"><div><strong>Selo verificado</strong><span>Mostra o selo azul ao lado do seu nome.</span></div><input class="checkbox-input" name="profile-verified" type="checkbox" ' + (state.currentUser.verified ? "checked" : "") + " /></label>" +
                      '<label class="switch-row"><div><strong>Exibir email</strong><span>Deixa o email visivel no perfil completo.</span></div><input class="checkbox-input" name="profile-show-email" type="checkbox" ' + (state.currentUser.visibility.email ? "checked" : "") + " /></label>" +
                      '<label class="switch-row"><div><strong>Exibir telefone</strong><span>Mostra seu telefone no perfil completo.</span></div><input class="checkbox-input" name="profile-show-phone" type="checkbox" ' + (state.currentUser.visibility.phone ? "checked" : "") + " /></label>" +
                      '<label class="switch-row"><div><strong>Exibir aniversario</strong><span>Mostra sua data de aniversario no perfil completo.</span></div><input class="checkbox-input" name="profile-show-birthday" type="checkbox" ' + (state.currentUser.visibility.birthday ? "checked" : "") + " /></label>" +
                    "</div>" +
                  "</section>" +
                  '<section class="settings-section">' +
                    "<h4>Aparencia</h4>" +
                    '<p class="helper">Altere o clima visual da interface sem perder suas configuracoes.</p>' +
                    '<div class="switch-list">' +
                      '<label class="switch-row"><div><strong>Tema blackout</strong><span>Ativa um visual escuro com fundo fechado e contraste mais forte.</span></div><input class="checkbox-input" name="profile-theme-blackout" type="checkbox" ' + (state.ui.theme === "blackout" ? "checked" : "") + " /></label>" +
                    "</div>" +
                  "</section>" +
                  '<div class="modal-actions">' +
                    '<button class="button-primary" type="submit">Salvar configuracoes</button>' +
                    '<button class="button-soft" type="button" data-action="open-profile">Ver perfil</button>' +
                    '<button class="button-outline" type="button" data-action="reset-profile-settings">Restaurar padrao</button>' +
                    '<button class="button-outline" type="button" data-action="close-modal">Fechar</button>' +
                  "</div>" +
                "</form>" +
              "</div>" +
            "</div>";
          return;
        }

        if (modal.type === "create-story") {
          elements.modalLayer.innerHTML =
            '<div class="modal">' +
              '<div class="modal-hero">' +
                "<h3>Criar story</h3>" +
                "<p>Publique uma previa rapida para aparecer como primeiro destaque da sua rede.</p>" +
              "</div>" +
              '<div class="modal-body">' +
                '<p class="helper">Use uma frase curta e, se quiser, uma imagem para a capa do story.</p>' +
                '<form id="storyForm">' +
                  '<div class="field-grid">' +
                    '<textarea class="inline-textarea full" name="story-status" placeholder="O que voce quer mostrar no story agora?"></textarea>' +
                    '<input class="inline-input full" name="story-preview-image" type="url" placeholder="URL da imagem de previa (opcional)" />' +
                  "</div>" +
                  '<div class="modal-actions">' +
                    '<button class="button-primary" type="submit">Publicar story</button>' +
                    '<button class="button-soft" type="button" data-action="open-profile">Ver perfil</button>' +
                    '<button class="button-outline" type="button" data-action="close-modal">Cancelar</button>' +
                  "</div>" +
                "</form>" +
              "</div>" +
            "</div>";
          return;
        }

        if (modal.type === "sell") {
          elements.modalLayer.innerHTML =
            '<div class="modal">' +
              '<div class="modal-hero">' +
                "<h3>Vender produto</h3>" +
                "<p>Crie um anuncio novo e ele aparece no marketplace imediatamente.</p>" +
              "</div>" +
              '<div class="modal-body">' +
                '<p class="helper">Preencha os campos abaixo para adicionar mais um item ao painel lateral.</p>' +
                '<form id="sellForm">' +
                  '<div class="field-grid">' +
                    '<input class="inline-input" name="product-name" type="text" placeholder="Nome do produto" />' +
                    '<input class="inline-input" name="product-price" type="number" min="0" step="1" placeholder="Preco em numeros" />' +
                    '<input class="inline-input" name="product-location" type="text" placeholder="Cidade" />' +
                    '<input class="inline-input" name="product-image" type="url" placeholder="URL da imagem (opcional)" />' +
                    '<textarea class="inline-textarea full" name="product-description" placeholder="Descreva o estado e os detalhes do produto"></textarea>' +
                  "</div>" +
                  '<div class="modal-actions">' +
                    '<button class="button-primary" type="submit">Publicar no marketplace</button>' +
                    '<button class="button-outline" type="button" data-action="close-modal">Cancelar</button>' +
                  "</div>" +
                "</form>" +
              "</div>" +
            "</div>";
        }
      }
    })();
  

