#This is the os file for interacting with the file system 
import os

#The text files we are going to compare are in string format
#But we need to transform that into numbers so that their similarity
#can be measured
#Hence this transformation is known as vectorization 
#We are using the Tf idf vectorizer
from sklearn.feature_extraction.text import TfidfVectorizer

#This function checks two documents to find the similarity 
from sklearn.metrics.pairwise import cosine_similarity

cwd=os.getcwd()
print("The current working directory is:",cwd)

dir_list=[]

#The os module is used to interact with the operating system
#Here we are going to use it for listing all the files4
_path = "C:/Users/Bhaskar/Desktop/titles"
dir_list = os.listdir(_path) 

print("The directory list is",dir_list)

import nltk
from nltk.stem import PorterStemmer
stemmer=PorterStemmer()

files=[]

for filename in os.listdir(_path):
   with open(os.path.join(_path, filename), 'r') as f:
    var=str(f.read().lower())
    files.append(var)

print(files)

#Here we are using the concept of stemming and Lemmatization
#So what stemming does is that lets say we have words such as eating,sleeping ,payable etc
# It converts these words into eat , sleep , pay 

#Lemmatization works a little differently
# It converts words such as ate to eat however unlike stemming it doesn't use a bunch of rules to eliminate the last ing,able
finallist=[]

# words=["helping","ability","eating","ate"]
#print(word, "|",stemmer.stem(word))
for file in files:
    var =[]
    var.append(file)
    final=var[0].split()
#     print(final)
    str=''
    for word in final:
        finalword=stemmer.stem(word)
#         print(finalword)
        str+=finalword+" "
    print(str)
    finallist.append(str)
    print(finallist)
        
finalslist=[]
#Till now we have lowecased the data and performed stemming operation
# The next step is to remove the stop words from the data
# These stop words are the words such as is the and etc

#nltk library provides us with some stopwords
# nltk.download('stopwords')
# from nltk import stopwords
from nltk.corpus import stopwords

stop_words = set(stopwords.words('english'))

for file in finallist:
    var =[]
    var.append(file)
    final=var[0].split()
#     print(final)
    str=""
    for word in final:
        if word not in stop_words:
            str+=word+" "
    print(str)
    finalslist.append(str)

print(finalslist)

# This is the function to vectorize the files that are passed
def vectorize(text):
    return TfidfVectorizer().fit_transform(text).toarray()

# This is the function which takes two files as parameters and 
#returns the consine similarity between the two files
def similarity(doc1,doc2):
    return cosine_similarity([doc1,doc2])

vectors=vectorize(finallist)

print(vectors)

# Now let us zip the file and the data that is available with the file
vectors_final=list(zip(dir_list,vectors))

print(vectors_final)

#Now this is the variable where the results of the plagiarism are stored
plagiarism_results=set()

#This is the function for checking the plagiarism
#In this case we are only checking the plagiarism of the document1 which is dhruv with the other documents
text_file_to_check=""
vector_to_check=[]
def check_plagiarism():
    text_file_to_check=vectors_final[0][0]
    vectors_to_check=vectors_final[0][1]
#     print(text_file_to_check)
#     print(vectors_to_check)
    
    for i in range(1,len(vectors_final)):
        ans=similarity(vectors_to_check,vectors_final[i][1])[0][1]
        print(ans)    

check_plagiarism()


