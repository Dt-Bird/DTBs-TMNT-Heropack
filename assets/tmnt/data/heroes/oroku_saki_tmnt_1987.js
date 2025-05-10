function init(hero) {
    hero.setName("Oroku Saki");
    hero.setVersion("1987");
    hero.setTier(2);
    
    hero.setHelmet("Head");
    hero.setChestplate("Nagagi");
    hero.setLeggings("Hakama");
    hero.setBoots("Feet");
    hero.addPrimaryEquipment("fiskheroes:katana", true);
    hero.addPrimaryEquipment("fisktag:weapon{WeaponType:tmnt:bo_staff}", true, item => item.nbt().getString("WeaponType") == "tmnt:bo_staff");
	
	hero.addPowers("tmnt:ninja_skills");
	hero.addAttribute("DAMAGE_REDUCTION", 0.75, 1);
	hero.addAttribute("PUNCH_DAMAGE", 2.0, 0);
    hero.addAttribute("WEAPON_DAMAGE", 1.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 0.45, 1);
	
	hero.addKeyBind("UTILITY_BELT", "key.utilityBelt", 1);
	
	hero.setDefaultScale(0.94);
}