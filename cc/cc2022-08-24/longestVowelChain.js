// Longest vowel chain


// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

const solve = s => Math.max(...s.match(/[oeaiou]+/g).map(x=> x.length))


// Time: 1070ms Passed: 101 Failed: 0
// Test Results:
// Basic tests
// Test
// Completed in 2ms
// Random tests
// Testing for "oaaeehhtrgriunssdvxulmwozmuexkyveoiitlcfquapyzjgwqjfdponkibcbaz"
// Testing for "ppasrzvmqyukxljaqwngkousffaatbhtcuiyemoioizuogxlevibderdhcnwjez"
// Testing for "mfuidskodbyehgdyeainuglxjgzoiupiqjtzrrmpcvtaeohwavtwexobzahfnapeomipiruftikakzsuiesxowwjcecosunuryqqbvednaghllokjcbfxavqymulz"
// Testing for "hiavucamecjnikdwpuudosameialqezihouuotanfokubbaxrqrpumohwoiygtfgjirfolvetofdrymeasetplixbpgzayskzvcxueyglwjkzqeiqhvsjbdncnxwz"
// Testing for "roubxeffzydacldbinjhaagjkqluqxgpnmkwsethowupzmuriticeoveaosvyiz"
// Testing for "qpoctteqiyhaeofsnrvguzhoxbicmbsmzruoyalbqopimxqfistuediwlgaaaouerdvunhlgoiwaolxrfkkuneaejikvhijpjwauencuyyfbkzszvmtdcxpwegjdz"
// Testing for "hsfxgtlbvunknputkegqbwrvrhaluzcqcztqhspxhoaoemawcodcaixaubbgiiapatulieguuromzmeiyiadhmuapfjdeupswjialtzilxeesikqusbewtyyaidwfebesequsihakgorooiftrynexyiezqenwbxxuyoukwrzuhtzglifvzgqjjcvfvnajhmoojmdaykrkinoeloibedpovaaplmqgccoddpnmfwxjvrvcofknjsuuyoz"
// Testing for "eiwguoxalcualnjiuewcfqvrfkbeahispoiokyamxrptzydjzgheosvqmndtbuz"
// Testing for "welcdtqksuofkysaqicudjlzommvwgtfiaubjjolecfxaafiinahxksufvztunegndvldiuobgxboamhnuyboegvsijeojhoykabeuiyiwudoeruonijzwufrvihegzhepadckazpuzomiaidwsouqevxbprpgxxneeoupohluztnriyxwrashbomvjjakaykcmqrqrfdeqtxcwezckgoamgttsmvecqibqslfuarplaepyhytpnwliiz"
// Testing for "frtdyzlkiniipmeepogzgsasuqnvwojhaoletbvjciwdkuacxumofexrbuhqyaz"
// Testing for "pzunxitjooazlaecmerslvdqjouiwyawxaqectkrrjdnisbhjgdtohuhtjnmwoeevnnrqqulhvixrfzehuaaoaimrqgcvyiguaoqsaekuwkuhiojyaxzmtkvczgxbebkcflszifbavybytiueqpievuzxywdauynfxcpuelfgiwpyauonzepaeajuofhsspoqdllggoiboxbaousrgcmmfkptsbddiwukwidotnohkeclmrjvfieipmez"
// Testing for "hkujrauobotusiirfouiueiaepduojcmslehusuidypowbmiyldgmxqfepwmfaqcozsfnkjfwkaajtevlaaxoroevsgipdvgjlvytvdebecxxkicfjqvpjaeyhzcudqomltokhdvemerxxogetqaxuuugagozstyinhndfoalrnurtoazyewwrilxkaqiecumuzniznmlyospaaevwbepbkbnhiozshthykfzrcaqcqwigwipjnbubgiz"
// Testing for "kqwruaymjoowglyhmubuulxaubpsnajixmoesohgxnzbvbqphdazrviivvdhejivvjqfogkoszeewaozcjjjaluqemkagbkaldpxmesottepqgdkckoocoyfianzxyhamzqsigutxecihfsrtwelfjtoewwuuxurwmlpvpipkqynzedgtfintsibqaealyriuuehandcaycmeoeziiwcsviioitfaeoufornyubrbhunddkfcurapgxlz"
// Testing for "nbtoyxoauosyddfdupmiidxfpsalmcuvyeoafnlwmitjqjksfchbpfwjuskgunckdrpiiquliwimcnqezmonrxueuiwhodubzcfbiiaajilgtzonorvxzzyfeekoteghsiiwbyqiomoeoegavvftrnkclybeuujpaesnurwplrtswqxvxahtocgwqoukrameeacaubmzgzepveuoabothkhddiljvxzalaahugsygxqyjjvhkeqieaprz"
// Testing for "xziqwgtlqfexiwnpumadoouqozzbskewxiwijeapjsamliacnfxburhvjtcocugatsgoeealmdiorovanzufuyybjvvdthuiegefakrqcpyhkblhuinmseodkyprz"
// Testing for "bfahaxedefajpjivekvuuduzhwltqygoyontcboipsorczlegwmunaiqikxmrsz"
// Testing for "hutawbiyarkddporeplxoxiugommzelqcvbzfujgtauifscwaoienjkhenvysqz"
// Testing for "oiutnaokafowtigouukcipeejqasmxjggyaicvvhhqmcwmelsobpujyavrgfqpbbuondibxizuozksymorfivezellltsewhuiurfddneaxahcrtpnqwakydexzjz"
// Testing for "ivfflneqjramegtoudpiiyaouoixhbjwmeudszktocbyqnzwevagcrlhxpkausz"
// Testing for "fcprkjvnlyhuxjwinmupdsvazobtaiyaxralesueokigozemefubwtdgiqcqohz"
// Testing for "dowsexfhewtphgvnolsmfjabiareoxmcdkilquezjyuviuopiatzcuqgnkyrbaz"
// Testing for "gceiienjvfawoopwuwifgxnrnpijpiuhimuparltdoloszckpvemxusoxugvxlaeqdqhqxtoietrgneanhyauagzbceavndsdbobxkkcldrotakzytfjsqrhzaibcywlhoisqmdgomtbjzfsgkxivijoafwuiixlfypjaikybdeyctlsaqbuqovneerczobmpejwafovidkuurlucwhmjanuopuuyegwhseeazmkmautqevfeyuihozrz"
// Testing for "anrdqbgwiimhkedvcoioqatplhyevjioaujusegnzbfkzxxuaculytwoefpmsrz"
// Testing for "qifeciinkmduuroqreyykjonahoroujijpxcxqeveofkilowdgruoldewevzcgedtmibqkzpsntgyuxjbuhotuhanahgfaaauvlbaswpesxwfaimvptzlybszmicz"
// Testing for "sthrusbooothnazneshixkiwkaqeurjflnezarypeyslesnvzrtijpdgiuvweretxojracbtsnvcmzazjbymcegacaldeboglqdfqebieklkovywlxjabhkhiaxcwxqyooukuvgqumyrgnxuauaucjpgiopqgmwldrmeioimoldpkinuphovexipavgoifqawdjufphcbzatoaumztfotoedsamxfyueciuisfuuwjwhfidnkzbyvqiez"
// Testing for "ybtatajxvauecevyhzayehukezpgoqokjifmrapslnunuvoirbftnftlonywexkjoimisurmdxhuihpzvirdqogaxbsoguokqcllgqiawzispwdufembjaedccwez"
// Testing for "jriieqzkxkawouiproycaslkuueyserieaeeceavqnhgvalxlttomiozimkspgeypuivemgnihchbueuexiymffdatbtcouwolizvgoibnzngacxuuzgobqnhocpgfamduebroqraozdawpebvymifpsayelrnvivoddjuuqsqkmtsozreyixjjrwdhdonauwujjcxhhbkukwhakxmstlcevglujfippandfzqxlbswwqootjaftyfaiz"
// Testing for "ibvezgvknmiexuiqsdsvfhhrtdseilkqompjujwznjrxluiauiaxdthqflsmtuyzhfiequozipkiehorrcfwxcmmonogluunygbvjzwfaafcnqfaaampayonxdzitkcmdojeanwsjvpuwaobuxwrvuelkuylgbbosejbabhxlpateymignecoieefzkyroatlvajeueobuopxvcecyqiqwiytusaioparudhchwgokpirgkesdoqztdgz"
// Testing for "ieqoncwfqfydmkholzozgnxegiehpkvoauirpwdsbujcatbvauyiseajmuxrltz"
// Testing for "hlyytstrbnjjkgydaebsmkmxpuatjovucviorupzeozmigynhdlreboekjqvuxgoaffogoepznwksaakiipwifncqodahehaiuiillqjedcyubzdoosdmfrhefpwobctvtugiaxvimlyoxoygencfeamxquuzipgetvftanvxheqrjieowkawbfceklboasxzaaoriiaquewurbnhiruihwdjpvuxjsuqyacmqunwszmkguplstedlzcz"
// Testing for "yuxlpvfumnmkjrhxgoqvrhwieojqagsuekefadztzteauibciadpcboyonislwz"
// Testing for "afiyehicslibkxwxqeuqovuzngampodwuoetfkrtnielapmybhcauojdgsjvrzz"
// Testing for "aphozkipnaciugqwrfukdglyaihbefxizceevorvjlqndbojumeutwsyxmstoaz"
// Testing for "abjgyqzgrkukhjeymaxebdxnilouqeepopmwcvuzvaodunhfiliwsttsfarcioz"
// Testing for "weehjfsorrvynzuxtogaiiljefeoqqptzubumhuabgayiskcmwancvdidkpolxz"
// Testing for "axaqoufmtxvudxtepeuriqenoluojholczhhhrsrobnysuwewtevdfqiuodkgpzcmimkyafkpamuijvgbjcblxiwjgnlbgaspzoznurvdeatwsiyoaacfkqiieeyz"
// Testing for "upqaetjaopgyekidmaoqigknvoahliewrhupdezbpuluouoiheavvonacegjslibtzosfyejwdubnkrfijaaqtylshsixbfmmeekvcneiimuexruucvotimoodfhogriutovgcwuodnceqmkjakrqxzjcubmxzrklshayubnoisgmvygwatxwauzlcppfzxeuaadwiulsxocdohznifftpqkbibjxdlaetrwfgrwyesqpyqanhiyvezjz"
// Testing for "lyuatkxudniqsaopdaugeknsmlfumkqerctziqunhdrubiqrsxxzbmzrnsonjguisqeovbwpojmjaoyuodaieadaafcmopuvkviketdmfparfajnezlwbcvrljathlrioevefcuhibngghbiwovlanifdxiteuuyouzxygxteywjfaegzfpohejibmdpqyohejkcoytewvasurpzoehwhxuzbviqgsuccwoxocikqisegmiypalwktlaz"
// Testing for "oapaibexxoflaqcnuhjtztsumvudypiorcdayiegjmbervukozisewkqgnfhlwz"
// Testing for "epwgvcnmdlkviteeeoxwkacieexbbuywmuzgtthbrhupwxmiarcqaugppohagosnepavduhzajovonnaflifxlvqniemjkrdfnjosaeoauvqtauoxledamgiynaijjoupubepgmgazkcacuxvfcfxartdbystirzzhiulmkojihriqayizmnzffeoiswtyhjrelyobkivsdujczswksidqyyoweruuogchlquwbetepxoqdkquiobslfz"
// Testing for "xbqrekwqiiutjfbizsklxqkednwodlepdqffamcevvryayeyluuukbcojijnozztghasreaogutcxhznwuiiesponvjubtawaopahimoielrxhgpoauydvcgmsfmz"
// Testing for "skyaeowayzgblulecansmtpufwkdhiqvevxhncupgjiatreoofxizjqbumriodz"
// Testing for "nutaiiaiemnuilheqvsiyweiwebltgkiprxdogpydgmeqfpqaarmeioufdycfkwlanwtxuqdzzzauahjheabcvxzlkjyoosrsxvjotcvhbkngoosmuebcpruuojfz"
// Testing for "wemqjooboayzcdbkthllmvuhmtfasgqcibxcarleeiweoxpxoeatmpjvqxtonvqwaiohbjouvoaqdhzidrmzhpsioizfgxqfpuagdkuvcvrwsunikiuiniwefoaydososrixygewjabtnuvkalycmeiewufarkteubpxglrazayhugzpwgeoqjnkftxoindayeusurlrdieictudufschecpeplkmyjzmuiausbnebgkvfjaozhyqnljz"
// Testing for "qyujawzxxratglhsditvizwcmaepaozrlodfoknwebpbjzvioujbukgwmxisgorjuuxaoiicpstievcnempyhkfeohyyuddqbfcnaaqlrmvuuhetagqieslkeofnz"
// Testing for "ivaqekeajrxnepbyiolvjbirwzlcdundhetgiosmtumuxfapoocyhqskugafwzz"
// Testing for "wmlzekurgzooenjixuqobaidfjizuammejcavfknhnhtanobahviuhgilgooapwewyseadefbgxmepwjrputipdjqircuqvuhlarklquvitbuouzadryfieisoaeacssdbyvnfhveeituzexqykzhuskwtgycdqkondcscazbixoyraamubxxboriepojuizmofcyftgonipcglluwxawmhtjgkfmejooeeppstxlqskvruqvaldnywiz"
// Testing for "ilvigiwhygasfukaxfuoqyrdepofwqeboelylveaqrucktixewfpcedqeakzipxcerooguyziiionwoeoaqxbisvfowklbjfjetxbshoaautanhdcyknaxfldjgmjjashdrfiozamezocybhbjdsaeamgehmnreuvuhmkvoiutmqaoiliucotrdbmigtsltuwnpvjnznucuhvpdzxuscrigbgapkmxsueeilqyzwyovknjpuqwurtzpaz"
// Testing for "ehaidlqivexbntiqzsiokgcuxeidtsovnfyxupobppjjckwnpgmwbzfkiecosctlvaemfuuyjalnrrahhaeftmieooauwzuzbakoodqauvmygrhuijelqgxyswrdz"
// Testing for "cuoswpnwiefqtacbgtuphepizyuxasvuenorbtzecoaazfmuisialnliendwvxbrgaaehmfyvjweoqurjcumoslimaygoebxdvijorzugkjtkodihqkyhkxdfplqz"
// Testing for "raoikewcerfzeiuahpvgeynsevnuxszbqhacawgmzgruxiyiobylkblhmtkfosdcgfduefamjoeobxwiuujtjxophiqqmycnpodivatdvuptjwlnsokazrqiealuz"
// Testing for "midonhxagsvefimgtouxuwzxutfaeipochuraqieejbmglovurostwcvniykmjohefyzlppwenfgcqjduriqxueakeqhaoiwinculzazdosyavdskpltrbkbyajbz"
// Testing for "okfgpukolqzenpopacjmofyfdxeziumwzjaqrxoaxnrilteqtwshkytbcuedvhjyunmkvcetlehsygomjuniwrgieldwoioavbfabpvubxazeusgaqihraicisudz"
// Testing for "rfxoitzkbjceafawnaevaudzkggulooquejfldgotnfkwinemjwcctiumrafsqousyqiutadiodfxzomdsielohrcohcppiksxtjuxvuaabuywmtdvmciphhefwigueueyuudeelnzigeaqwhwhakotwrabvogpopugexoaeurpcsnkihxiayestzxiaspmyvelbczvoqbqdhgvibjmzbonoflejnzlirksyqnumaiyrvypkjqxlajbrz"
// Testing for "emuheepcvftirbdudtwuzoojoazeaakyetjqqpfgwmitluwwcvpsxixlrzbiyhaibaeqgkrjakxcnsfyergouumuvdzqubispoamihalvckoxjnooghfyndisnlez"
// Testing for "wmbprailpuajuzuimbsjklnercnotdtioaxhhfiyvvcegdeqgxsuozfkeyaowqz"
// Testing for "mgjonasqmdelfiheukdobotpxgvaezqczukylvonwcpiiixfhuyebjwautrsraz"
// Testing for "jacumumixijpatzqjqoidiucsfhwuyaieozuksiekeanyzaxkptlwdkvnxgqqothrohrcsnzacsryxmevdxenrlqfgsioasairithibqiufpmugbdeflgxaheleomwebiljterisdobikhywjvakoqmcmegnhacuprqodwuifaheabvoeoetbpptovwuvzfeaxmangjfgxvkzubrujcotgabyzpsifoeyuldldcjnypuzouonvlwuwkyz"
// Testing for "xkqaaeeesgooeauuinftujlosxjcpizfhlqdtxahfkrpsbdbarxnmyrolkqelewcluhdzhkzxmhdzcjxweetriqopresuzjcnvhgbufesakwipjyowpdqahbhnloavtaffqmatmqgnviiyipgtougwuajleozkcadaerxwsvklpuymicvcufruiuvkyjnnyeqaawxbomvioibdigcfoboidteuaijwuvyuiiumoynosggtzrepszbmoez"
// Testing for "taocacblbvopnklatavruniieyoixugkdheoisefaucfoozfiwokvtuzhfelrxosnxrhezaeswyarzwygxtenimjgaehyqmbbvmjqudgwdpikuldcpjqmpjuuqisz"
// Testing for "etsbxvmwuqaorgnroogkjrshfivfxcymefqithenaozzzguajdbilfolqauuoskmkwcnoejtpctshyayeieuxahbiwoniebpgpuxwrcmdjkvuvyldipeuaqzdialz"
// Testing for "hfxjmejukdvbthucobaegaeopqupaauoscndieynxoyiswiwfgzzmrqkvtrlliz"
// Testing for "nihectzisuzllnwbovctreokywzobbuhiaxseqmaoqciwwiyfoexobsjatggdvuokpyveanemplfejqdahnfkyauzdrutidjlqegivuoxprxjugmfkuapacisrhmz"
// Testing for "oejobuhfcaabksxvowzlpudiepectxwurglvongatsnqekmauzmdyfqyirjhiiz"
// Testing for "ozddijqwxuucjaqttnsnmadaqrqiuxcwrbjarwkyeeepnoipthymmxjioouaihfenldepwyqorqiwrzlnvihkvovshcllemyjuuveyzapeleykgibbgctdukraxllvpofuzzoagaouuaieaoioubcoanvuddpbtuosxwfnjreagathfcmyoiocfpusxfzlbbeigrexkjegkvaqausnxmhktyfzjiwomezcfsmshvgiusiqidwgebhktpz"
// Testing for "mlsunoxqedpzdcibafeaqurtjzimcunituokpwhvayeweorbhggvxfoayilksjz"
// Testing for "etgjzavruodanhqoaeyopmlnwqnjpbzaiafyxysougkozvoxduhoqfgmkuyntohxpjfhgtpgeurxonxsczqjybwzlcukjbroxutxoeiiewllkaiarieuwddtsinalvydkfiyilfcktlzbarsgumijkmqmbbpaxwjmcoeiuvfisiceoiaacbfuggqdpsuhdehuoeavszrkosriewnfyqvcqjevwiedmbzportnauaveuwieeuacpmhlthz"
// Testing for "wpracaycozodndqacjgetahqurjixpuapbuoqvrfgvzeolbssetjikixlvouhiptekwkyhmwfenjlnmnisfmxhagizqauzuuyswbfvdoyeutxcdkglaoerobmeiiz"
// Testing for "qgacrttlejkmoxwmoiuizpshbievouyvmwnsagdspfjbfzwgqukilrkddhczaaixayrqsoarponqegkexdmlveeicelzfcnubjtoahbavxounyfijieywouuptuhz"
// Testing for "iaauejdiwfpolgjnewxvpfwuohideorgoioaeugkjultuwmtuidersnueqrtqnenyfvoseomhqoyurreaclycutkilookuuzxvoysakzttzxnlhwlycvihfyheaaifdjmabyiabfxmqdisuocacvoisahbxrmugrxbhmicoqqapiafsedmojvwkjczbywehvxkasugtilpafwtgqkznaixdmndgeluneoujszkgerivbcpjqzezppbbpz"
// Testing for "xunxwyeirvzlkghfmoicwvnvtqaiaedaptyemcforlbfhirpolohzksgeguhobmoewkisqpcqsrvjawsieydfauzixkjzmtpdiyxabunnboojteglqjaduueucuaz"
// Testing for "lsabeoguszimtxgyjcxpepwmkirifqcutnuekehdfqlaiujyzdnwvbhvaoaoorz"
// Testing for "lhuwnxqojjeugzhkanyarzbxcmvgistokdcipuiuqdlafoebfrmwiepetaosvyz"
// Testing for "uqduilwotigvptrqkfzrmmvofcyeujxnioxaapehckwujbhaiesgadbszlenyoz"
// Testing for "obetaukosrtfcglhaqtbwdntyaeliimqpaeaiuxvzhfojjgspdpxnhlexopikuukkdvobrosoumyufsvunulmeyjghefarudicpoewbgizfrntwbanhbgozcierzceuzeqfhyqxsjyclsozevsioqweazniycdkjudmoiydkglxgxfpunqwivyfsmjetiodguwheoukveboqvlacaatitmwrxqaphoaaeiuzirkrwvalnixmabpjcmujz"
// Testing for "dumgooyaahzxckpkanocrtgyovpqqsfcwjglwldbwpiyzjxyketkqtnshaabneumyaoeesxlalziiublnzvyppnusvzxheouhjoinfagrsimixeqtofrcmmaurueoxazupwfeugtbicbhamxuaiirivzaoiemjdewqqdfvvozrlmtifcnsdqbokaidfgsljhcbjhoeukplowyfcbeeaeowitiaoupisukuhvqyweddjurntejrggxkuvz"
// Testing for "dlytkoeulexuixoooopoqovihbizbccxdueawlxibpzmeiegqfcijgbydafcatenwdzalacwzybafnlhoakorczawykqnfvrjxviigmuwirkxkhpimqemgsuxstsuzietaotqeunnrcieejuhegogbdrfmzhwddiydacuqpousejfmnxahluepytsljmsnjfmvzvrkuqaihqytibjrogarnooboupeupeatvpaigskylvuhusvjwfwkaz"
// Testing for "oaippwjoswuchiyggthracoyxleedfetdureijkmmvqanfxozlbkasviubzunqz"
// Testing for "auxueonmhpifuisfeeuqlavhpyzjkvsgadrtcyezcirxboamtbqnglikojwwodz"
// Testing for "uhkxsltarxwnidqxudxxgdowbjthlifoaixorubceeegcpfubiueeiywtomjobsctukxzcmaanovqhszglbqvubiuyretvopmzfpbsknhzvklndjnzpareiqaiaaieuojvycfovyhidoyeazrsufvyepiujjpkhorpqeyasfzrwfakwifqzumkwqioancgltthijowwiuuuyasdrikheqxgelancnoesdbdeeogamvogalcjuglmptmmz"
// Testing for "nigyzdiiajgjnpkyydlhkyilowiipcbruheyzlfxeewfietejhzoummmxmiobjcgvfepkewuavkpeusikhupeqffiuipesqddaxgoaaroaadojcwvluzqazgnmlravlotmoixuzashzxbsjfhqtryqnwfoqorouanppknobucsjyxqcdswbtoucnixerrvlaikevhbnwjayisvaefeoatbiauedkvquclthezxrmugcggotbdusomtuwz"
// Testing for "auitimqbxwdojeiuxofeszvbaqsuhchtwdveakyiulfapkmelogpgnnzcyorjrz"
// Testing for "bntpwxqjrwkjaznbmtuvpcundcyiigmdayvzshkoreeaqgehigoixlsyupepfzowdsaxumvjrqiuehalotzcuineftcauxoadbfwlmvsrgkljkoaooeiifbuhyqez"
// Testing for "eomfvcqbipjygmekajvlkptusewjuigigreronuifnesbolcdesoaydmxudceuttptuzalghzdhraonvaikehaiasovwczmaqpxjrxxwiwzokobnyuhqqlyiffbuz"
// Testing for "wimueolccuozxajkphpekbzgzkonydtartaqfjvaoesessymsoeuxiduidqyflixqzulefepudigaagenkohcbvwtawnijgybocvrxhrnawmuiojrhpqbfvimlutz"
// Testing for "rjeulivbriedxfpyfqaoskgqwuxsicoezwdglazipaumnmkvhohtutncayobejz"
// Testing for "koantengnayfijmxwltlinixetrasefblgozdecmxrjujyuuiuleaafogvhpiroucydoceirhdvsoytqqadpuiqxbakobvkouhpzkzsjqfwbgwapzwmsiucvmheez"
// Testing for "ajeumkooehtvyriwtsxkvoavfmdbqadmsomgwicppyjluuaizfifukspjoyblrebcpqqqxnestbauhduucvyzxniftcxrnlowzelidweohgrkauonzejahgigieaz"
// Testing for "iaetbhmrwiqevuinduaygkovasopljsjpqcodfzmaouekyengxrltwzxuifhcbz"
// Testing for "atkeivoushbxkusezomqaiudljfqanzwbcpfrracjigewydhgiunoemlotvypxz"
// Testing for "ebgibukepsdxmievubgaghgudyzmvqauuoowotydukkrloheojiaanccussecfajiownainvnfjhweitcffhrwexiypovlzrrybjatzxlasqmxpqieuqlpkomdtzz"
// Testing for "aotbkhdofqulgelnfxdcpqfhimmodozretuwgtcabqesixnvyauxznzpynyqleasjuizgrbimxivukcvrgpuoiawaoleejposihuadihjufcewerasmboytvkwjkz"
// Testing for "iujhnjzcgufkszbliwodayodvxbfolaeqyrmeukpitcxanvraqpmheuiowtgesz"
// Testing for "lunskmdyaqakgymuruiiuaujfaetsiaxgzwlwdiwooomxhibqoinbveoouecxeuomodnudtdjugrigxcvuaqsaellqfvznrmhugeiescrftrzhouckfmveipavaeeqkuubdlafirwmasickzjqqtiwkucoohywjqpomwjaxeeigosariegzxdfyhbioeatexspvljznpotehbbzjpaybozkljgwyvtbfaschpcyxnphprnfdtvulynkiz"
// Testing for "pieaiikecmnwnuvdcwkoayrnjfdizvakljoqirpmyssxitvtoepekpyijyusnvdrefutfqfueyrcewzaaxzeknbrrardikzygeiuumchpkoxuagbpeiovdwsnoquvlawtxgtfhvsemfhuguzoabuiszghceuqqimakucfbygbqxouhjdwljlxoqaoatwjhcotqzdioecilpltaueabevoimzogbreblhjowipalsjuxsnmhnxogayfmdz"
// Testing for "aiaicohtpmjpcqkkfnnojilxambogaeahnldqsgsztixzyhywgaercuznveuopdvefmkxewtvebujoglhaaujzsqytbuviwcxyidkrfoloriwrmpquudsebofeiuz"
// Testing for "oulokopqgfxqztheabvfsenemvripsujbidawlxokgnytaciceyaurhdmzwjiuz"
// Testing for "eisgeyatyheobfpoxivijlnwsquardwomfmgxuazcclkzhdbutujanvopkreqiz"
// Testing for "zpoervobaqecgeyrojhmaaiauzfkeyevmnyxibixgqrkaovdjiixzcdkdtfastemawuyiwrninuwqsdhpouesahjgqpbgfouovkiecfsluhcotntulmxlwulbjpzz"
// Testing for "baqegenqbojairpotyxuhcihapvxawlszgkakrjezlnmcoifpbnsjgowuvezbfseocdauzmahiuhejouifdftytrkunrwdsmcveyvuoeuoxwdgimqxpliqtiklyaz"
// Completed in 9ms
// You have passed all of the tests! :)