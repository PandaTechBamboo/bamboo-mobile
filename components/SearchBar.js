<View id="search-bar" style={styles.searchBar}>
    <TouchableOpacity id="search-icon-container" style = {styles.searchIconContainer} onPress={() => navigation.navigate('')}>
        <Image id="search-icon" style = {styles.searchIcon} source = {searchIcon}/>
    </TouchableOpacity>
    <TextInput id="search" style={styles.search} placeholder="search" value={search} onChangeText={setSearch}/>
</View>