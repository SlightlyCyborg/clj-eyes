(ns taoensso.timbre.appenders.core
  "Core Timbre appenders without any special dependency requirements.
  These can be aliased into the main Timbre ns for convenience."
  {:author "Peter Taoussanis"}
       
           
                            
                                                    

        
  (:require
   [clojure.string  :as str]
   [taoensso.encore :as enc :refer-macros (have have?)]))

;; TODO Add a simple official rolling spit appender?

;;;; Println appender (clj & cljs)

                                                     
                                                      
                                      

(defn println-appender
  "Returns a simple `println` appender for Clojure/Script.
  Use with ClojureScript requires that `cljs.core/*print-fn*` be set.

  :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}."

  ;; Unfortunately no easy way to check if *print-fn* is set. Metadata on the
  ;; default throwing fn would be nice...

  [&                                                    [_opts]]
  (let [            
                          
                                           
                                           
                       ]

    {:enabled?   true
     :async?     false
     :min-level  nil
     :rate-limit nil
     :output-fn  :inherit
     :fn
     (fn [data]
       (let [{:keys [output-fn]} data]
                (println (output-fn data))
              
                                  
                                                              
                                    
                                    
                                
                                                               ))}))

(comment (println-appender))

;;;; Spit appender (clj only)

     
                                      
                                
               
                                  
                                                
                                                             
                                                     

     
                   
                                                      
                                                       
                   
                    
                  
                  
                       
      
             
                                    
                                                     
                                        
                                                              
                                           

(comment (spit-appender))

;;;; js/console appender (cljs only)

      
(defn console-appender
  "Returns a simple js/console appender for ClojureScript.

  For accurate line numbers in Chrome, add these Blackbox[1] patterns:
    `/taoensso/timbre/appenders/core\\.js$`
    `/taoensso/timbre\\.js$`
    `/cljs/core\\.js$`

  [1] Ref. https://goo.gl/ZejSvR"

  ;; TODO Any way of using something like `Function.prototype.bind`
  ;; (Ref. https://goo.gl/IZzkQB) to get accurate line numbers in all
  ;; browsers w/o the need for Blackboxing?

  [& [{:keys [raw-output?]} ; Undocumented (experimental)
      ]]
  {:enabled?   true
   :async?     false
   :min-level  nil
   :rate-limit nil
   :output-fn  :inherit
   :fn
   (if (and (exists? js/console) js/console.log)
     (let [;; Don't cache this; some libs dynamically replace js/console
           level->logger
           (fn [level]
             (or
               (case level
                 :trace  js/console.trace
                 :debug  js/console.debug
                 :info   js/console.info
                 :warn   js/console.warn
                 :error  js/console.error
                 :fatal  js/console.error
                 :report js/console.info)
               js/console.log))]

       (fn [data]
         (let [{:keys [level output-fn vargs_]} data
               vargs      @vargs_
               [v1 vnext] (enc/vsplit-first vargs)
               logger     (level->logger level)]

           (if (or raw-output? (enc/kw-identical? v1 :timbre/raw)) ; Undocumented
             (let [output (output-fn (assoc data
                                       :msg_  (delay "")
                                       :?err_ (delay nil)))
                   ;; [<output> <raw-error> <raw-arg1> <raw-arg2> ...]:
                   args (->> vnext (cons @(:?err_ data)) (cons output))]

               (.apply logger js/console (into-array args)))
             (.call    logger js/console (output-fn data))))))

     (fn [data] nil))})

(comment (console-appender))

;;;; Deprecated

       (def console-?appender "DEPRECATED" console-appender)

;;;;;;;;;;;; This file autogenerated from src/taoensso/timbre/appenders/core.cljx
