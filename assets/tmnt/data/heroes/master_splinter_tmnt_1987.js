function init(hero) {
    hero.setName("Master Splinter");
    hero.setVersion("1987");
    hero.setTier(3);
    
    hero.setHelmet("item.superhero_armor.piece.mask");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
	
	hero.addPowers("tmnt:mutant_ninja_skills");
	hero.addAttribute("DAMAGE_REDUCTION", 0.75, 1);
	hero.addAttribute("PUNCH_DAMAGE", 4.0, 0);
    hero.addAttribute("WEAPON_DAMAGE", 1.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 0.45, 1);
	
	hero.addKeyBind("UTILITY_BELT", "key.utilityBelt", 1);
	
	hero.setDefaultScale(0.729729);
}