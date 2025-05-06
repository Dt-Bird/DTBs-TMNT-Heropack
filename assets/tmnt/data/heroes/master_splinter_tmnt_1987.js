function init(hero) {
    hero.setName("Master Splinter");
    hero.setVersion("1987");
    hero.setTier(3);
    
    hero.setHelmet("item.superhero_armor.piece.head");
    hero.setChestplate("Nagagi");
    hero.setLeggings("Black Belt");
    hero.setBoots("Wraps");
	hero.addPrimaryEquipment("fiskheroes:katana", true);

	hero.addPowers("tmnt:mutant_rat_physiology", "tmnt:plot_armor");
	hero.addAttribute("DAMAGE_REDUCTION", 0.75, 1);
	hero.addAttribute("PUNCH_DAMAGE", 4.0, 0);
    hero.addAttribute("WEAPON_DAMAGE", 1.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.5, 0);
    hero.addAttribute("FALL_RESISTANCE", 0.45, 1);
    hero.addAttribute("SPRINT_SPEED", 0.25, 1);
	
	hero.addKeyBind("UTILITY_BELT", "key.utilityBelt", 1);
    hero.addKeyBind("SHIELD", "Plot Armor", 4);

	hero.setDefaultScale(0.729729);
}

function getAttributeProfile(entity) {
    return entity.getData("fiskheroes:shield_blocking") ? "SHIELD" : null;
}