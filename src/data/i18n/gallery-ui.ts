import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'ark cheats',
		title: 'ark cheats gallery',
		subtitle: 'Simple ark cheats visuals — ESP, wallhack, aimbot, and radar for ARK: Survival Ascended on PC.',
		lead: 'ARK Hacks helps you spot players, wild dinos, loot, and base raids with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'ark cheats esp', copy: 'See players through walls with ark cheats esp and wallhack overlays.' },
			{ title: 'ark cheats radar', copy: 'Track nearby threats with ark cheats radar before you push or base raid.' },
			{ title: 'ark cheats aimbot', copy: 'Use soft aim and aimbot controls tuned for ARK raids on Windows PC.' },
		],
		updatesLabel: 'ark cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'ARK Hacks',
		title: 'Galería ARK: Survival Ascended',
		subtitle: 'Visuales de ARK: Survival Ascended con loadouts, peleas de escuadrón y combate raid — junto a herramientas ESP, radar y Aimbot.',
		lead: 'ARK Hacks está pensado para el loop BR de ARK: Survival Ascended: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al base raid.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Customs y scav-run para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot ARK: Survival Ascended', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones ARK Hacks',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'ARK Hacks',
		title: 'Galerie ARK: Survival Ascended',
		subtitle: 'Visuels ARK: Survival Ascended — loadouts, combats d\'escouade et raid — avec ESP, radar et Aimbot.',
		lead: 'ARK Hacks suit la boucle BR de ARK: Survival Ascended : lire la carte, suivre les escouades, loot et survivre au base raid.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Customs et scav-run pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot ARK: Survival Ascended', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour ARK Hacks',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'ARK Hacks',
		title: 'ARK: Survival Ascended Galerie',
		subtitle: 'ARK: Survival Ascended-Bilder zu Loadouts, Squad-Kämpfen und raid — mit ESP, Radar und Aimbot.',
		lead: 'ARK Hacks passt zur Raid-Schleife von ARK: Survival Ascended: Karte lesen, Gegner-Trupps tracken, looten und Extract überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Customs und scav-run für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'ARK: Survival Ascended Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'ARK Hacks Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'ARK Hacks',
		title: 'Galeria ARK: Survival Ascended',
		subtitle: 'Visuais de ARK: Survival Ascended com loadouts, combates de esquadrão e raid — com ESP, radar e Aimbot.',
		lead: 'ARK Hacks segue o loop BR do ARK: Survival Ascended: ler o mapa, rastrear esquadrões, lootar e sobreviver ao base raid.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Customs e scav-run para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot ARK: Survival Ascended', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações ARK Hacks',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'ARK Hacks',
		title: 'Galleria ARK: Survival Ascended',
		subtitle: 'Immagini ARK: Survival Ascended — loadout, scontri di squadra e raid — con ESP, radar e Aimbot.',
		lead: 'ARK Hacks è pensato per il loop BR di ARK: Survival Ascended: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al base raid.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Customs e scav-run per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot ARK: Survival Ascended', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti ARK Hacks',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'ARK Hacks',
		title: 'ARK: Survival Ascended galerij',
		subtitle: 'ARK: Survival Ascended-beelden van loadouts, squadgevechten en raid — met ESP, radar en Aimbot.',
		lead: 'ARK Hacks volgt de raid-loop van ARK: Survival Ascended: kaart lezen, vijandelijke squads volgen, looten en de base raid overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Customs en scav-run voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'ARK: Survival Ascended Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'ARK Hacks updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'ARK Hacks',
		title: 'Galeria ARK: Survival Ascended',
		subtitle: 'Grafiki ARK: Survival Ascended — loadouty, walki drużynowe i raid — z ESP, radar i Aimbot.',
		lead: 'ARK Hacks pasuje do pętli BR ARK: Survival Ascended: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj base raid.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Customs i scav-run dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot ARK: Survival Ascended', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje ARK Hacks',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'ARK Hacks',
		title: 'Галерея ARK: Survival Ascended',
		subtitle: 'Визуалы ARK: Survival Ascended — лоадауты, бои отрядов и raid — с ESP, радаром и Aimbot.',
		lead: 'ARK Hacks создан для рейд-циклу ARK: Survival Ascended: читать карту, отслеживать вражеские отряды, лут и выживать в base raid.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Customs и scav-run для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot ARK: Survival Ascended', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления ARK Hacks',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'ARK Hacks',
		title: 'ARK: Survival Ascended galerisi',
		subtitle: 'Loadout, takım savaşları ve raid görselleri — ESP, radar ve Aimbot ile.',
		lead: 'ARK Hacks, ARK: Survival Ascended BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve base raid\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Customs ve scav-run\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'ARK: Survival Ascended Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'ARK Hacks güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'ARK Hacks',
		title: 'معرض ARK: Survival Ascended',
		subtitle: 'صور ARK: Survival Ascended — loadouts ومعارك الفرق وraid — مع ESP ورادار وAimbot.',
		lead: 'ARK Hacks مبني لحلقة BR في ARK: Survival Ascended: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في base raid.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Customs وscav-run لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot ARK: Survival Ascended', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات ARK Hacks',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'ARK Hacks',
		title: 'ARK: Survival Ascended ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのARK: Survival Ascendedビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'ARK HacksはARK: Survival AscendedのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてbase raidを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'Customsとscav-runで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'ARK: Survival Ascendedエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'ARK Hacks更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'ARK Hacks',
		title: 'ARK: Survival Ascended 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 ARK: Survival Ascended 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'ARK Hacks는 ARK: Survival Ascended BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, base raid 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Customs와 scav-run에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'ARK: Survival Ascended 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'ARK Hacks 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'ARK Hacks',
		title: 'ARK: Survival Ascended 图库',
		subtitle: 'ARK: Survival Ascended 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'ARK Hacks 为 ARK: Survival Ascended BR 循环设计：读图、追踪敌方小队、搜刮并在 base raid 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Customs 和 scav-run 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'ARK: Survival Ascended 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'ARK Hacks 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'ARK Hacks',
		title: 'ARK: Survival Ascended गैलरी',
		subtitle: 'Loadout, squad fights और raid visuals — ESP, radar और Aimbot के साथ।',
		lead: 'ARK Hacks ARK: Survival Ascended BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और base raid survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Customs और scav-run पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'ARK: Survival Ascended Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'ARK Hacks updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'ARK Hacks',
		title: 'Galeri ARK: Survival Ascended',
		subtitle: 'Visual ARK: Survival Ascended — loadout, pertempuran squad, dan raid — dengan ESP, radar, dan Aimbot.',
		lead: 'ARK Hacks untuk loop BR ARK: Survival Ascended: baca peta, lacak squad musuh, loot, dan selamat di base raid.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Customs dan scav-run untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot ARK: Survival Ascended', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update ARK Hacks',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'ARK Hacks',
		title: 'แกลเลอรี ARK: Survival Ascended',
		subtitle: 'ภาพ ARK: Survival Ascended — loadout การต่อสู้ทีม และ raid — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'ARK Hacks สำหรับลูป BR ของ ARK: Survival Ascended: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด base raid',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Customs และ scav-run เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot ARK: Survival Ascended', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต ARK Hacks',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'ARK Hacks',
		title: 'Thư viện ARK: Survival Ascended',
		subtitle: 'Hình ảnh ARK: Survival Ascended — loadout, chiến đấu squad và raid — với ESP, radar và Aimbot.',
		lead: 'ARK Hacks cho vòng BR ARK: Survival Ascended: đọc bản đồ, theo dõi squad địch, loot và sống sót base raid.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Customs và scav-run để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot ARK: Survival Ascended', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật ARK Hacks',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'ARK Hacks',
		title: 'Галерея ARK: Survival Ascended',
		subtitle: 'Візуали ARK: Survival Ascended — loadout, бої загонів і raid — з ESP, радаром і Aimbot.',
		lead: 'ARK Hacks для рейд-циклу ARK: Survival Ascended: читати карту, відстежувати ворожі загони, лут і виживати в base raid.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Customs і scav-run для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot ARK: Survival Ascended', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення ARK Hacks',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'ARK Hacks',
		title: 'Galerie ARK: Survival Ascended',
		subtitle: 'ARK: Survival Ascended vizuály — loadouty, squad souboje a raid — s ESP, radarem a Aimbot.',
		lead: 'ARK Hacks pro BR smyčku ARK: Survival Ascended: číst mapu, sledovat nepřátelské squady, loot a přežít base raid.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Customs a scav-run pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot ARK: Survival Ascended', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace ARK Hacks',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'ARK Hacks',
		title: 'Galerie ARK: Survival Ascended',
		subtitle: 'Vizualuri ARK: Survival Ascended — loadout, lupte de squad și raid — cu ESP, radar și Aimbot.',
		lead: 'ARK Hacks pentru bucla BR ARK: Survival Ascended: citește harta, urmărește squad-uri inamice, loot și supraviețuiește base raid.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Customs și scav-run pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot ARK: Survival Ascended', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări ARK Hacks',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'ARK Hacks',
		title: 'ARK: Survival Ascended galleri',
		subtitle: 'ARK: Survival Ascended-bilder — loadouts, squadstrider och raid — med ESP, radar och Aimbot.',
		lead: 'ARK Hacks för ARK: Survival Ascended:s raid-loop: läs kartan, spåra fiendesquads, loota och överlev base raid.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Customs och scav-run för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'ARK: Survival Ascended Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'ARK Hacks uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
