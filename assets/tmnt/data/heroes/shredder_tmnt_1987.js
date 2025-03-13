function init(hero) {
    hero.setName("Shredder");
    hero.setVersion("1987");
    hero.setTier(3);
    
    hero.setHelmet("item.superhero_armor.piece.mask");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
	
	hero.addPowers("tmnt:ninja_skills");
	hero.addKeyBind("UTILITY_BELT", "key.utilityBelt", 1);
	hero.addKeyBind("BLADE", "key.blade", 2);
	
	hero.addAttributeProfile("BLADE", bladeProfile);
	hero.setAttributeProfile(getProfile);
	hero.setDamageProfile(getProfile);
    hero.addDamageProfile("BLADE", {"types": {"SHARP": 1.0}});
}

function bladeProfile(profile) {
    profile.inheritDefaults();
    profile.addAttribute("PUNCH_DAMAGE", 7.5, 0);
}

function getProfile(entity) {
    return entity.getData("fiskheroes:blade") ? "BLADE" : null;
}
