function init(hero) {
    hero.setName("Rocksteady");
    hero.setVersion("1987");
    hero.setTier(4);
    
    hero.setHelmet("item.superhero_armor.piece.head");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
	
	hero.addAttribute("PUNCH_DAMAGE", 8.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.5, 0);
    hero.addAttribute("FALL_RESISTANCE", 0.45, 1);
    hero.addAttribute("SPRINT_SPEED", 0.45, 1);
	
	hero.setDefaultScale(0.959459);
}