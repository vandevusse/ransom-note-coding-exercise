def isalpha(str)
  return false if str.empty?
  !str.match(/[^A-Za-z]/)
end

def can_ransom(magazine, note)
  if not note
    return true # empty note
  elsif not magazine
    return false # note but no magazine
  end

  letters = {}
  for c in note.split("")
    if isalpha(c)
      upper = c.upcase
      if letters[upper] 
        letters[upper] += 1
      elsif
        letters[upper] = 1
      end
    end
  end
  
  for c in magazine.split("")
    if isalpha(c)
      upper = c.upcase
      if letters[upper]
        if letters[upper] == 1
          letters.delete(upper)
        else
          letters[upper] -= 1
        end
      end
    
    if letters.length == 0
        return true
      end
    end
  end
  
  return false
end

# make call to function
note = "Hello you"
magazine = "He will lower you into the well"
print(can_ransom(magazine, note))