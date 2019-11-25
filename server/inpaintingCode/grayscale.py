import sys
import numpy as npy
import matplotlib.pyplot as plt
import matplotlib.image as img
from statistics import mean

m = img.imread(sys.argv[1])
w, h = m.shape[:2]

plt.imshow((m).astype(npy.uint8))
plt.show()

new = npy.zeros([w, h, 3], dtype=int)

for i in range(w): 
   for j in range(h): 
      lst = [float(m[i][j][0]), float(m[i][j][1]), float(m[i][j][2])] 
      avg = float(mean(lst)) 
      new[i][j][0] = avg 
      new[i][j][1] = avg 
      new[i][j][2] = avg 

plt.imshow((new).astype(npy.uint8))
plt.show()


