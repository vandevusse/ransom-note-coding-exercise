def can_ransom(magazine, note):
    if not note:
        return True # empty note
    if not magazine:
        return False # note but no magazine

    letters = {}
    for c in note:
        if c.isalpha() :
            upper = c.upper()
            if upper in letters:
                letters[upper] += 1
            else:
                letters[upper] = 1
                
    for c in magazine:
        if c.isalpha() :
            upper = c.upper()
            if upper in letters:
                if letters[upper] == 1:
                    del letters[upper]
                else:
                    letters[upper] -= 1
        if len(letters) == 0:
            return True
    
    return False

# make call to function
note = "Hello you"
magazine = "He will lower you into the well"
print(can_ransom(magazine, note))