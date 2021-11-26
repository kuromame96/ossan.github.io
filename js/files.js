function loadFiles(dir){
   if (WebSite.isNW) return;
	dir.rel('res.json').obj({"images":[{"name":"$pat_base","url":"images/base.png","pwidth":32,"pheight":32,"type":"wh"},{"name":"$pat_sample","url":"images/Sample.png"},{"name":"$pat_neko","url":"images/neko.png","pwidth":32,"pheight":32},{"name":"$pat_mapchip","url":"images/mapchip.png","pwidth":32,"pheight":32},{"type":"single","name":"$pat_bg","url":"images/bg.png"},{"type":"single","name":"$pat_coolguy","url":"images/coolguy.png"},{"type":"single","name":"$pat_warning","url":"images/warning.png"},{"type":"single","name":"$pat_rogo0","url":"images/rogo0.png"},{"type":"single","name":"$pat_rogo1","url":"images/rogo1.png"},{"type":"single","name":"$pat_rogo2","url":"images/rogo2.png"},{"type":"single","name":"$pat_rogo3","url":"images/rogo3.png"},{"type":"single","name":"$pat_rogo4","url":"images/rogo4.png"},{"type":"single","name":"$pat_ojisan_face","url":"images/ojisan_face.png"},{"type":"single","name":"$pat_gun","url":"images/gun.png"},{"name":"$icon_thumbnail","pwidth":200,"pheight":200,"url":"images/icon_thumbnail.png"},{"type":"single","name":"$pat_uketuke","url":"images/uketuke.png"},{"type":"single","name":"$pat_otherningen","url":"images/otherningen.png"},{"type":"single","name":"$pat_pika","url":"images/pika.png"},{"type":"single","name":"$pat_sentaku","url":"images/sentaku.png"},{"type":"wh","name":"$pat_rocket_scene_stand","url":"images/rocket_scene_stand.png","pwidth":512,"pheight":512},{"type":"wh","name":"$pat_rocket_scene_bg","url":"images/rocket_scene_bg.png","pwidth":1080,"pheight":1920},{"type":"wh","name":"$pat_osouji_scene_bg","url":"images/osouji_scene_bg.png","pwidth":1080,"pheight":1920},{"type":"single","name":"$pat_osouji_scene_bg_gw","url":"images/osouji_scene_bg_gw.png"},{"type":"wh","name":"$pat_rot_item_scene_bg","url":"images/rot_item_scene_bg.png","pwidth":1080,"pheight":1920},{"type":"single","name":"$pat_hitball","url":"images/hitball.png"},{"type":"wh","name":"$pat_zig_zag_item_scene_bg","url":"images/zig_zag_item_scene_bg.png","pwidth":1080,"pheight":1920},{"type":"wh","name":"$pat_bigface","url":"images/bigface.png","pwidth":512,"pheight":512},{"type":"wh","name":"$pat_bigface_hand","url":"images/bigface_hand.png","pwidth":256,"pheight":512},{"type":"single","name":"$pat_bikabika","url":"images/bikabika.png"},{"type":"single","name":"$pat_dosukoi","url":"images/dosukoi.png"},{"type":"single","name":"$pat_dosukoi_hand","url":"images/dosukoi_hand.png"},{"type":"single","name":"$pat_road_bg","url":"images/road_bg.png"},{"type":"wh","name":"$pat_cool_guy_scene_bg2","url":"images/cool_guy_scene_bg2.png","pwidth":1080,"pheight":1920},{"type":"single","name":"$pat_ojisan","url":"images/ojisan.png"},{"type":"single","name":"$pat_ojisan_kime","url":"images/ojisan_kime.png"},{"type":"single","name":"$pat_ojisan_damage","url":"images/ojisan_damage.png"},{"type":"single","name":"$pat_bg_clear_scene","url":"images/bg_clear_scene.png"},{"type":"wh","name":"$pat_bigface_scene_bg","url":"images/bigface_scene_bg.png","pwidth":1080,"pheight":1920},{"type":"single","name":"$pat_suutu_in","url":"images/suutu_in.png"},{"type":"single","name":"$pat_porosyatu_in","url":"images/porosyatu_in.png"},{"type":"single","name":"$pat_autaa_in","url":"images/autaa_in.png"},{"type":"single","name":"$pat_suutu_sita_in","url":"images/suutu_sita_in.png"},{"type":"single","name":"$pat_zubon_in","url":"images/zubon_in.png"},{"type":"single","name":"$pat_gurasan_in","url":"images/gurasan_in.png"},{"type":"single","name":"$pat_bousi_in","url":"images/bousi_in.png"},{"type":"single","name":"$pat_bad_bousi_in","url":"images/bad_bousi_in.png"},{"type":"single","name":"$pat_bad_zubon_in","url":"images/bad_zubon_in.png"},{"type":"single","name":"$pat_bad_autaa_in","url":"images/bad_autaa_in.png"},{"type":"single","name":"$pat_zubon","url":"images/zubon.png"},{"type":"single","name":"$pat_autaa","url":"images/autaa.png"},{"type":"single","name":"$pat_bad_autaa","url":"images/bad_autaa.png"},{"type":"single","name":"$pat_bad_zubon","url":"images/bad_zubon.png"},{"type":"single","name":"$pat_bousi","url":"images/bousi.png"},{"type":"single","name":"$pat_imo","url":"images/imo.png"},{"type":"single","name":"$pat_riizento_in","url":"images/riizento_in.png"},{"type":"single","name":"$pat_bad_bousi","url":"images/bad_bousi.png"}],"sounds":[{"name":"$se_ha","url":"sounds/ha.ogg"},{"name":"$se_get","url":"sounds/get.ogg"},{"name":"$se_syaki","url":"sounds/syaki.mp3"},{"name":"$se_gunshot","url":"sounds/gunshot.mp3"},{"name":"$se_coolguydamage","url":"sounds/coolguydamage.mp3"},{"name":"$se_doko","url":"sounds/doko.mp3"},{"name":"$se_jump","url":"sounds/jump.mp3"},{"name":"$se_pa","url":"sounds/pa.mp3"},{"name":"$se_dash","url":"sounds/dash.mp3"},{"name":"$se_gua","url":"sounds/gua.mp3"},{"name":"$se_k_132","url":"sounds/k_132.mid"},{"name":"$se_k_94","url":"sounds/k_94.mid"},{"name":"$se_k_65","url":"sounds/k_65.mid"},{"name":"$se_k_130","url":"sounds/k_130.mid"},{"name":"$se_kamaeru","url":"sounds/kamaeru.mp3"},{"name":"$se_irassyai","url":"sounds/irassyai.mp3"},{"name":"$se_suburi","url":"sounds/suburi.mp3"},{"name":"$se_k_67","url":"sounds/k_67.mid"},{"name":"$se_k_40","url":"sounds/k_40.mid"},{"name":"$se_pyun","url":"sounds/pyun.mp3"},{"name":"$se_chin","url":"sounds/chin.mp3"},{"name":"$se_out","url":"sounds/out.mp3"},{"name":"$se_rakurai","url":"sounds/rakurai.mp3"},{"name":"$se_k_79","url":"sounds/k_79.mid"},{"name":"$se_kira","url":"sounds/kira.mp3"},{"name":"$se_k_128","url":"sounds/k_128.mid"},{"name":"$se_k_131","url":"sounds/k_131.mid"},{"name":"$se_burp1","url":"sounds/burp1.mp3"}]});
	dir.rel('options.json').obj({"compiler":{"namespace":"user","defaultSuperClass":"kernel.Actor","dependingProjects":[{"namespace":"kernel","url":"js/kernel.js"}],"noLoopCheck":false,"field_strict":false},"run":{"mainClass":"user.Main","bootClass":"kernel.Boot","globals":{"$defaultFPS":60,"$imageSmoothingDisabled":true,"$soundLoadAndDecode":false,"$stage":-1,"$frame":0,"$difficulty":0,"$stageList":[],"$bossList":[],"$boss":-1,"$bossDifficulty":0,"$norma":17,"$bossCrash":false,"$normaMax":17}},"plugins":{"PicoAudio":1,"box2d":1,"jquery_ui":1},"kernelEditable":false,"language":"tonyu","version":1622028112472,"social":{"prjName":"ojisan","title":"ojisan","whenPrjDirExists":"selectPolicy"}});
}