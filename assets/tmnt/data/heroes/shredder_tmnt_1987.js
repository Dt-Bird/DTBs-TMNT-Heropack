function init(hero) {
    hero.setName("Shredder");
    hero.setVersion("1987");
    hero.setTier(7);
    
    hero.setHelmet("item.superhero_armor.piece.mask");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
	
	hero.addPowers("tmnt:shredder_armor");
	hero.addAttribute("PUNCH_DAMAGE", 7.5, 0);
    hero.addAttribute("WEAPON_DAMAGE", 4.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 2.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 0.45, 1);
    hero.addAttribute("SPRINT_SPEED", 0.45, 1);
	
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