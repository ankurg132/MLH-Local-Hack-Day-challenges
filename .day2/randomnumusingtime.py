from time import time

def time_random():
 return time() - float(str(time()).split('.')[0])

def gen_random_range(min, max):
 return int(time_random() * (max - min) + min)

if __name__ == '__main__':
     print(gen_random_range(20,60))
